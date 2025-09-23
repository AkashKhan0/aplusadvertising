"use client";
import { useState, useRef } from "react";

export default function AddProject() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    imageFile: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const fileRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({ ...form, imageFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.imageFile) return setMessage("❌ Please select an image");

    setLoading(true);
    try {
      // 1) upload to cloudinary
      const fd = new FormData();
      fd.append("file", form.imageFile);
      fd.append("folder", "projects");

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });

      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error);

      // 2) save to DB
      const payload = {
        title: form.title,
        description: form.description,
        link: form.link,
        image: uploadData.url,
      };

      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setMessage("✅ Project added successfully!");
      setForm({ title: "", description: "", link: "", imageFile: null });
      if (fileRef.current) fileRef.current.value = null;

      window.dispatchEvent(new Event("projects:refresh"));
    } catch (err) {
      setMessage("❌ " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold w-fit title1 uppercase mb-5">
        Add Project
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 rounded">
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          onChange={handleFile}
          required
          className="border px-2 py-1"
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="border px-2 py-1"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="border px-2 py-1"
        />
        <input
          type="url"
          name="link"
          placeholder="Project Link"
          value={form.link}
          onChange={handleChange}
          required
          className="border px-2 py-1"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2"
        >
          {loading ? "Adding..." : "Add Project"}
        </button>

        {message && (
          <p
            className={`text-sm ${
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
