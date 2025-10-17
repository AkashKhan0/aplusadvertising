"use client";
import { useState } from "react";

export default function ProductList({ refreshData }) {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    url: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🖼️ Image Upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("folder", "templates");

    const res = await fetch("/api/upload", { method: "POST", body: data });
    const result = await res.json();
    setLoading(false);

    if (result.url) {
      setFormData({ ...formData, image: result.url });
      setMessage("✅ Image uploaded successfully!");
    } else {
      setMessage("❌ Image upload failed!");
    }
  };

  // 📤 Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/template", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setLoading(false);

    if (res.ok) {
      setMessage("✅ Template added successfully!");
      setFormData({ image: "", title: "", description: "", url: "" });
      refreshData && refreshData(); // refresh list
    } else {
      setMessage("❌ Failed to add template!");
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Add New Template</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="file"
          onChange={handleImageUpload}
          className="border w-full p-2 rounded"
        />
        {loading && <p>Uploading...</p>}
        {formData.image && (
          <img
            src={formData.image}
            alt="preview"
            className="w-32 h-32 object-cover rounded"
          />
        )}

        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border w-full p-2 rounded"
        />

        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="border w-full p-2 rounded"
        />

        <input
          type="text"
          placeholder="URL"
          value={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          className="border w-full p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Saving..." : "Save Template"}
        </button>
      </form>
      {message && <p className="text-gray-600 mt-3">{message}</p>}
    </div>
  );
}