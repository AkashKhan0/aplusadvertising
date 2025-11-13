"use client";
import { useEffect, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete, MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { MdFileUpload } from "react-icons/md";

export default function UserList() {
  const [templates, setTemplates] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [uploading, setUploading] = useState(false);

  // 🔄 Fetch all templates
  const fetchTemplates = async () => {
    const res = await fetch("/api/template");
    const data = await res.json();
    setTemplates(data);
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  // 🗑️ Delete template
  const handleDelete = async (id) => {
    if (!confirm("Are you sure to delete this template?")) return;
    await fetch(`/api/template/${id}`, { method: "DELETE" });
    fetchTemplates();
  };

  // ✏️ Start edit
  const handleEdit = (item) => {
    setEditingId(item._id);
    setEditData(item);
  };

  // 🖼️ Upload new image (Cloudinary)
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("folder", "templates");

    const res = await fetch("/api/upload", { method: "POST", body: data });
    const result = await res.json();

    setUploading(false);

    if (result.url) {
      setEditData({ ...editData, image: result.url });
    } else {
      alert("Image upload failed!");
    }
  };

  // 💾 Save updated template (everything together)
  const handleUpdate = async (id) => {
    const res = await fetch(`/api/template/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });

    if (res.ok) {
      setEditingId(null);
      fetchTemplates();
    } else {
      alert("Update failed!");
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        All Templates
      </h2>

      {templates.length === 0 ? (
        <p className="text-gray-500 text-center py-10 text-lg">
          🚫 No data templates found.
        </p>
      ) : (
        <div className="w-full flex flex-col gap-5">
          {templates.map((item) => (
            <div
              key={item._id}
              className="w-full flex items-center justify-between gap-2.5"
            >
              {editingId === item._id ? (
                <>
                  <div className="w-full border flex items-center justify-center gap-5">
                    {/* Image Upload Section */}
                    <div className="relative">
                      <img
                        src={editData.image}
                        alt="preview"
                        className="w-full h-40 object-cover"
                      />
                      <label
                        htmlFor={`upload-${item._id}`}
                        className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700"
                        title="Change Image"
                      >
                        <MdFileUpload size={18} />
                      </label>
                      <input
                        id={`upload-${item._id}`}
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                      {uploading && (
                        <p className="text-sm text-gray-500 mt-1">
                          Uploading...
                        </p>
                      )}
                    </div>

                    {/* Editable Fields */}
                    <div className="flex flex-col gap-2.5">
                      <div className="flex gap-2.5">
                        <input
                          type="text"
                          value={editData.title}
                          onChange={(e) =>
                            setEditData({ ...editData, title: e.target.value })
                          }
                          className="border w-full p-2 rounded"
                          placeholder="Title"
                        />
                        <input
                          type="text"
                          value={editData.url}
                          onChange={(e) =>
                            setEditData({ ...editData, url: e.target.value })
                          }
                          className="border w-full p-2 rounded"
                          placeholder="URL"
                        />
                      </div>
                      <textarea
                        value={editData.description}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            description: e.target.value,
                          })
                        }
                        className="border w-full p-2 rounded"
                        placeholder="Description"
                      />
                    </div>

                    {/* edit update icons */}
                    <div className="flex justify-between gap-5">
                      <button
                        onClick={() => handleUpdate(item._id)}
                        className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                      >
                        <MdDone size={18} /> Update
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="flex items-center gap-2 bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
                      >
                        <RxCross1 size={18} /> Cancel
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between gap-5 w-full bg-[#A2B2D1] p-2 rounded">
                    {/* Default View */}
                    <div className="w-[20%] flex items-center justify-start">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[180px] h-[80px] object-center rounded"
                      />
                    </div>

                    <div className="w-[50%]">
                      <h3 className="text-2xl font-semibold capitalize">{item.title}</h3>
                      <p className="text-base text-gray-600 mt-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="w-[25%] flex justify-between items-center mt-2">
                      <div className="w-full flex items-center justify-end gap-2.5">
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-yellow-700 hover:text-yellow-900 flex items-center gap-1.5 border px-3.5 py-1 rounded"
                          title="Edit"
                        >
                          <FiEdit3 size={20} /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="text-red-700 hover:text-red-900 flex items-center gap-1.5 border px-3.5 py-1 rounded"
                          title="Delete"
                        >
                          <MdDelete size={22} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
