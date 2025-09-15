"use client";
import { useState, useRef, useEffect } from "react";

export default function AddPartner() {
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleFile = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const resetForm = () => {
    setForm({ name: "", title: "", description: "", file: null });
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.file) {
      setMessage("❌ Please select an image.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Upload image
      const fd = new FormData();
      fd.append("file", form.file);

      const uploadRes = await fetch("/api/upload", { method: "POST", body: fd });
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error || "Image upload failed");

      // Create partner
      const payload = {
        profilePicture: uploadData.url,
        name: form.name,
        title: form.title,
        description: form.description,
      };

      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save partner");

      setMessage("✅ Partner added successfully!");
      resetForm();
    } catch (err) {
      console.error(err);
      setMessage("❌ " + (err.message || "Something went wrong"));
    } finally {
      setLoading(false);
    }
  };

  // Optional: auto-hide message after 5s
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold w-fit mb-2.5">Add Partner</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label className="block mb-1">Profile Image</label>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFile}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Add Partner"}
        </button>

        {message && (
          <p
            className={`mt-2 text-sm ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
