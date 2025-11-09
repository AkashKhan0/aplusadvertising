"use client";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineDownloadDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import SubCategoryManager from "./SubCategoryManager";

export default function ServiceList() {
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImage, setEditImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🟢 Fetch categories
  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // 🟡 Handle delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    const res = await fetch(`/api/categories/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchCategories();
    } else {
      const err = await res.json();
      alert(err.error);
    }
  };

  // 🟢 Handle update (with optional new image)
  const handleUpdate = async (id) => {
    try {
      setLoading(true);

      let imageUrl = null;

      // যদি নতুন image select করা হয় → upload to Cloudinary
      if (editImage) {
        const uploadForm = new FormData();
        uploadForm.append("file", editImage);
        uploadForm.append("folder", "categories");

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: uploadForm,
        });

        const uploadData = await uploadRes.json();
        if (!uploadRes.ok) throw new Error(uploadData.error);
        imageUrl = uploadData.url;
      }

      // Update category (send updated fields)
      const res = await fetch(`/api/categories/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editName,
          description: editDescription,
          image: imageUrl || undefined, // যদি image না বদলানো হয়, আগেরটা থাকবে
        }),
      });

      if (res.ok) {
        setEditId(null);
        setEditName("");
        setEditDescription("");
        setEditImage(null);
        setPreview(null);
        fetchCategories();
      } else {
        const err = await res.json();
        alert(err.error);
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2.5">
      {/* ===== Main Categories List ===== */}
      <div className="main_cat w-full">
        <h1 className="text-2xl font-bold w-fit title1 uppercase mb-5">
          Main Categories
        </h1>

        <div className="w-full flex flex-col gap-2.5">
          {categories.map((cat) => (
            <div
              key={cat._id}
              className="w-full sm:w-full md:w-[60%] bg-[#A2B2D1] rounded-[6px] px-3 py-3 flex flex-col gap-3 shadow"
            >
              {editId === cat._id ? (
                <>
                  {/* Editable Fields */}
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Category Name"
                    className="px-2 py-1 w-full border rounded"
                  />
                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    placeholder="Description"
                    className="px-2 py-1 w-full border rounded"
                  />

                  {/* Image Upload */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setEditImage(file);
                      if (file) {
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                    className="w-full"
                  />

                  {/* Preview */}
                  <div className="flex items-center gap-3 mt-2">
                    {preview ? (
                      <img
                        src={preview}
                        alt="New Preview"
                        className="w-20 h-20 rounded border"
                      />
                    ) : (
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-20 h-20 rounded"
                      />
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end gap-2 mt-2">
                    <button
                      onClick={() => handleUpdate(cat._id)}
                      disabled={loading}
                      className="text-xl text-green-600 px-3 py-1"
                    >
                      {loading ? "Saving..." : <MdOutlineDownloadDone />}
                    </button>
                    <button
                      onClick={() => {
                        setEditId(null);
                        setEditName("");
                        setEditDescription("");
                        setEditImage(null);
                        setPreview(null);
                      }}
                      className="text-xl text-red-600 px-3 py-1"
                    >
                      <RxCross2 />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Display View */}
                  <div className="flex items-center gap-3">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-20 h-20 object-cover p-2"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-xl font-semibold capitalize">
                        {cat.name}
                      </h2>
                      <p className="text-sm text-gray-700">
                        {cat.description}
                      </p>
                    </div>
                    {/* Edit/Delete Buttons */}
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => {
                        setEditId(cat._id);
                        setEditName(cat.name);
                        setEditDescription(cat.description);
                        setPreview(null);
                      }}
                      className="text-xl px-3 py-1"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(cat._id)}
                      className="text-xl px-3 py-1 text-red-700"
                    >
                      <MdDelete />
                    </button>
                  </div>
                  </div>

                  
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== Sub Categories Section ===== */}
      <div className="w-full mt-10">
        <h1 className="text-2xl font-bold w-fit title1 uppercase mb-5">
          Sub Categories
        </h1>
        <div className="w-full flex flex-col gap-2.5">
          <SubCategoryManager />
        </div>
      </div>
    </div>
  );
}
