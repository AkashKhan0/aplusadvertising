// src/components/PartnerList.jsx
"use client";
import { useEffect, useState } from "react";

import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineDownloadDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function EditInline({ partner, onCancel, onSaved }) {
  const [name, setName] = useState(partner.name);
  const [title, setTitle] = useState(partner.title);
  const [description, setDescription] = useState(partner.description);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      let imageUrl = partner.profilePicture;

      if (file) {
        const fd = new FormData();
        fd.append("file", file);
        const up = await fetch("/api/upload", { method: "POST", body: fd });
        if (!up.ok) throw new Error("Image upload failed");
        const upData = await up.json();
        imageUrl = upData.url;
      }

      const res = await fetch(`/api/partners/${partner._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profilePicture: imageUrl,
          name,
          title,
          description,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Update failed");
      }

      const updated = await res.json();
      onSaved(updated);
    } catch (err) {
      console.error(err);
      alert(err.message || "Update error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded flex flex-col gap-2">
      <div className="flex items-center gap-2 w-full p-2 border rounded">
        <label>Change Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <div className="flex gap-2">
        <button
          disabled={loading}
          onClick={handleSave}
          className="px-3 py-1 bg-green-600 text-white rounded text-2xl"
        >
          {loading ? "Saving..." : <MdOutlineDownloadDone />}
        </button>
        <button
          onClick={onCancel}
          className="px-3 py-1 bg-gray-500 rounded text-2xl text-red-700"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}

export default function Partner() {
  const [partners, setPartners] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPartners = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/partners");
      const data = await res.json();
      setPartners(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load partners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/partners/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setPartners((p) => p.filter((x) => x._id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  const onSaved = (updated) => {
    setPartners((prev) =>
      prev.map((p) => (p._id === updated._id ? updated : p))
    );
    setEditingId(null);
  };

  return (
    <div className="space-y-4">
      {loading ? <p>Loading...</p> : null}

      {partners.map((p) => (
        <div key={p._id} className="p-4 rounded flex gap-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-lg">
          <img
            src={p.profilePicture}
            alt={p.name}
            className="w-20 h-20 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <div className="">
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.title}</p>
              <p className="text-base">{p.description}</p>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() => setEditingId(p._id)}
                className="px-3 py-1 bg-yellow-500 rounded text-white"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(p._id)}
                className="px-3 py-1 bg-red-600 rounded text-white"
              >
                <MdDelete />
              </button>
            </div>

            {editingId === p._1d ? null : null}
            {editingId === p._id && (
              <div className="mt-3">
                <EditInline
                  partner={p}
                  onCancel={() => setEditingId(null)}
                  onSaved={onSaved}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
