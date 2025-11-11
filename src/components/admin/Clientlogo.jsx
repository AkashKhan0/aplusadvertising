"use client";

import { useState, useEffect } from "react";

export default function Clientlogo() {
  const [logos, setLogos] = useState([]);
  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [editingLogo, setEditingLogo] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch logos from DB
  const fetchLogos = async () => {
    const res = await fetch("/api/clientlogos");
    const data = await res.json();
    setLogos(data);
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  // 🔹 Handle New Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageName || !imageFile) return alert("Please provide all fields!");

    setLoading(true);

    try {
      // Step 1: Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("folder", "clientlogos");

      const uploadRes = await fetch("/api/upload", { method: "POST", body: formData });
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error || "Upload failed");

      const imageUrl = uploadData.url;

      // Step 2: Save to DB
      const saveRes = await fetch("/api/clientlogos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: imageName, image: imageUrl }),
      });

      if (!saveRes.ok) throw new Error("Failed to save");

      setImageName("");
      setImageFile(null);
      fetchLogos();
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Delete logo
  const handleDelete = async (id) => {
    if (!confirm("Are you sure to delete?")) return;
    await fetch(`/api/clientlogos/${id}`, { method: "DELETE" });
    fetchLogos();
  };

  // 🔹 Start Editing
  const handleEdit = (logo) => {
    setEditingLogo(logo);
    setImageName(logo.name);
    setImageFile(null);
  };

  // 🔹 Cancel Editing
  const handleCancel = () => {
    setEditingLogo(null);
    setImageName("");
    setImageFile(null);
  };

  // 🔹 Update logo
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingLogo) return;

    setLoading(true);
    try {
      let imageUrl = editingLogo.image;

      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("folder", "clientlogos");
        const uploadRes = await fetch("/api/upload", { method: "POST", body: formData });
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url;
      }

      await fetch(`/api/clientlogos/${editingLogo._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: imageName, image: imageUrl }),
      });

      setEditingLogo(null);
      setImageName("");
      setImageFile(null);
      fetchLogos();
    } catch (err) {
      console.error(err);
      alert("Update failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      {/* 🧾 Form Section */}
      <div className="shadow-md rounded-xl p-6 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {editingLogo ? "Edit Client Logo" : "Add New Client Logo"}
        </h2>

        <form
          onSubmit={editingLogo ? handleUpdate : handleSubmit}
          className="flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <input
            type="text"
            placeholder="Image Name"
            value={imageName}
            onChange={(e) => setImageName(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="border border-gray-300 p-2 rounded-md w-full sm:w-1/3"
          />

          {!editingLogo ? (
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              {loading ? "Saving..." : "Add Logo"}
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
              >
                {loading ? "Updating..." : "Save"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-400 text-white px-5 py-2 rounded-md hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>

      {/* 🖼️ Logos List Section */}
      <div className="shadow-md rounded-xl p-6 border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Client Logos</h2>

        {logos.length === 0 ? (
          <p className="text-gray-500 text-sm">No logos found.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {logos.map((logo) => (
              <li
                key={logo._id}
                className="flex items-center justify-between py-3 px-2 rounded-md transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-64 h-20 object-contain rounded-md"
                  />
                  <span className="text-gray-800 font-medium">{logo.name}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(logo)}
                    className="text-sm bg-yellow-500 text-white px-3 py-1.5 rounded-md hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(logo._id)}
                    className="text-sm bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
