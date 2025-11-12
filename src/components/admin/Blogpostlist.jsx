"use client";
import { useEffect, useState } from "react";

export default function Blogpostlist() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false); // for image upload

  // Fetch all blogs
  const fetchBlogs = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Delete blog
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchBlogs();
      alert("Blog deleted successfully!");
    }
  };

  // Open edit modal
  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData(blog);
  };

  // Close edit modal
  const closeEditModal = () => {
    setEditingBlog(null);
    setFormData({});
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle image upload
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    form.append("folder", "blogs");

    try {
      const res = await fetch("/api/upload", { method: "POST", body: form });
      const data = await res.json();

      if (res.ok) {
        setFormData((prev) => ({ ...prev, image: data.url }));
        alert("Image uploaded successfully!");
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`/api/blog/${editingBlog._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      alert("Blog updated successfully!");
      closeEditModal();
      fetchBlogs();
    } else {
      alert(data.error || "Update failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Blogs</h2>

      <div className="flex flex-col gap-5">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="w-full flex items-center gap-5 rounded duration-300 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-lg px-2"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-40 h-20 object-cover my-2 rounded"
              />
            )}
            <div>
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <p className="text-gray-600">{blog.metaDescription}</p>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={() => handleEdit(blog)}
                className="bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-2"
              >
                ✏️
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-2"
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 w-full max-w-3xl h-[80vh] overflow-y-auto rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Edit Blog: {editingBlog.title}
            </h2>

            <form onSubmit={handleUpdate} className="space-y-3">
              {/* ✅ Image Upload Section */}
              {formData.image && (
                <div className="flex items-center gap-4">
                  <img
                    src={formData.image}
                    alt="Blog"
                    className="w-40 h-24 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, image: "" }))}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium my-2">
                  Upload New Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full border p-2 rounded"
                />
                {uploading && <p className="text-blue-500 text-sm">Uploading...</p>}
              </div>

              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title || ""}
                onChange={handleChange}
                className="w-full border p-2 rounded my-2"
              />
              <textarea
                name="metaDescription"
                placeholder="Meta Description"
                value={formData.metaDescription || ""}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <textarea
                name="introduction"
                placeholder="Introduction"
                value={formData.introduction || ""}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num}>
                  <input
                    type="text"
                    name={`subTitle${num}`}
                    placeholder={`Sub Title ${num}`}
                    value={formData[`subTitle${num}`] || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                  <textarea
                    name={`subDesc${num}`}
                    placeholder={`Sub Description ${num}`}
                    value={formData[`subDesc${num}`] || ""}
                    onChange={handleChange}
                    className="w-full border p-2 rounded mt-1"
                  />
                </div>
              ))}

              <textarea
                name="conclusion"
                placeholder="Conclusion"
                value={formData.conclusion || ""}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  {loading ? "Updating..." : "Update Blog"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
