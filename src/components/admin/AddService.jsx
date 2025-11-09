"use client";
import { useState, useRef } from "react";
import AddSubCategory from "./AddSubCategory";

export default function AddService() {
  const [categoryname, setCategoryname] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("❌ Please select an image");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // 1️⃣ Upload image to Cloudinary
      const uploadForm = new FormData();
      uploadForm.append("file", file);
      uploadForm.append("folder", "categories");

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: uploadForm,
      });
      const uploadData = await uploadRes.json();

      if (!uploadRes.ok) throw new Error(uploadData.error || "Image upload failed");

      const imageUrl = uploadData.url;

      // 2️⃣ Save category with image URL
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: categoryname,
          description,
          image: imageUrl,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Category creation failed");

      setMessage(`✅ Category "${data.name}" added successfully!`);
      setCategoryname("");
      setDescription("");
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = null;
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full">
        <h1 className="text-2xl font-bold w-fit title1 mb-2.5">
          Add Services Category
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2.5 w-full"
        >
          <input
            type="text"
            placeholder="Category name..."
            value={categoryname}
            onChange={(e) => setCategoryname(e.target.value)}
            className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            placeholder="Category description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full px-3 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#9C1F0E] text-white py-2 px-5"
          >
            {loading ? "Adding..." : "Add category"}
          </button>
        </form>

        {message && (
          <p className={`mt-2 text-sm ${message.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}
      </div>

      {/* Add Sub Category */}
      <div className="w-full mt-10">
        <h1 className="text-2xl font-bold w-fit title1 mb-2.5">
          Add Services Sub Category
        </h1>

        <div className="w-full">
          <AddSubCategory />
        </div>
      </div>
    </>
  );
}
