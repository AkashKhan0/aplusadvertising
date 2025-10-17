"use client";
import { useState } from "react";

export default function Blogpost() {
  const [formData, setFormData] = useState({
    title: "",
    metaDescription: "",
    image: "",
    introduction: "",
    subTitle1: "",
    subDesc1: "",
    subTitle2: "",
    subDesc2: "",
    subTitle3: "",
    subDesc3: "",
    subTitle4: "",
    subDesc4: "",
    subTitle5: "",
    subDesc5: "",
    conclusion: "",
  });
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("folder", "blogs");

    const res = await fetch("/api/upload", {
      method: "POST",
      body: uploadData,
    });

    const data = await res.json();
    if (data.url) {
      setFormData((prev) => ({ ...prev, image: data.url }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      alert("Blog added successfully!");
      setFormData({
        title: "",
        metaDescription: "",
        image: "",
        introduction: "",
        subTitle1: "",
        subDesc1: "",
        subTitle2: "",
        subDesc2: "",
        subTitle3: "",
        subDesc3: "",
        subTitle4: "",
        subDesc4: "",
        subTitle5: "",
        subDesc5: "",
        conclusion: "",
      });
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-xl space-y-4">
      <input name="title" placeholder="Blog Title" onChange={handleChange} value={formData.title} className="w-full border p-2 rounded mb-2" />
      <textarea name="metaDescription" placeholder="Meta Description" onChange={handleChange} value={formData.metaDescription} className="w-full border p-2 rounded" />

      <input type="file" onChange={handleImageUpload} className="border p-2 rounded w-full mb-2" />
      {formData.image && <img src={formData.image} alt="Preview" className="w-40 h-40 object-cover" />}

      <textarea name="introduction" placeholder="Introduction" onChange={handleChange} value={formData.introduction} className="w-full border p-2 rounded" />

      {[1, 2, 3, 4, 5].map((num) => (
        <div key={num}>
          <input name={`subTitle${num}`} placeholder={`Sub Title ${num}`} onChange={handleChange} value={formData[`subTitle${num}`]} className="w-full border p-2 rounded mt-2" />
          <textarea name={`subDesc${num}`} placeholder={`Sub Description ${num}`} onChange={handleChange} value={formData[`subDesc${num}`]} className="w-full border p-2 rounded mt-1" />
        </div>
      ))}

      <textarea name="conclusion" placeholder="Conclusion" onChange={handleChange} value={formData.conclusion} className="w-full border p-2 rounded" />

      <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
        {loading ? "Saving..." : "Save Blog"}
      </button>
    </form>
  );
}
