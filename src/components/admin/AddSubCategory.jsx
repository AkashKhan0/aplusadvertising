"use client";
import { useState, useEffect } from "react";

export default function AddSubCategory() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    categoryId: "",
    title: "",
    description: "",
    imageFile: null, // File object
    buttonText: "View Details",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // ✅ new state

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data || []))
      .catch(() => setCategories([]));
  }, []);

  const handleFile = (e) => {
    setForm({ ...form, imageFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.imageFile) {
      setMessage("Please choose an image.");
      return;
    }

    setLoading(true);
    setMessage(""); // reset message before starting
    try {
      // 1) Upload to cloudinary
      const fd = new FormData();
      fd.append("file", form.imageFile);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });

      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error || "Upload failed");

      // 2) Create subcategory
      const payload = {
        categoryId: form.categoryId,
        title: form.title,
        description: form.description,
        image: uploadData.url,
        buttonText: form.buttonText,
      };

      const createRes = await fetch("/api/subcategories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const createData = await createRes.json();
      if (!createRes.ok) throw new Error(createData.error || "Create failed");

      // ✅ success message
      setMessage("✅ SubCategory added successfully!");

      // reset form
      setForm({
        categoryId: "",
        title: "",
        description: "",
        imageFile: null,
        buttonText: "View Details",
      });
      window.dispatchEvent(new Event("subcategories:refresh"));
    } catch (err) {
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
        <select
          required
          value={form.categoryId}
          onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
          className="w-full border px-2 py-2"
        >
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id} className="capitalize">
              {c.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Title"
          value={form.title}
          required
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full border px-2 py-2"
        />

        <textarea
          placeholder="Description"
          value={form.description}
          required
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border px-2 py-2"
        />

        <input type="file" accept="image/*" onChange={handleFile} className="w-full border px-2 py-2" />

        <input
          type="text"
          placeholder="Button text (optional)"
          value={form.buttonText}
          onChange={(e) => setForm({ ...form, buttonText: e.target.value })}
          className="w-full border px-2 py-2"
        />

        <button
          type="submit"
          className="bg-[#9C1F0E] text-white px-4 py-2 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add SubCategory"}
        </button>

        {/* ✅ Message show here */}
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
    </>
  );
}
