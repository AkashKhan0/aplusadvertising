"use client";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineDownloadDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function SubCategoryManager() {
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "" });
  const [error, setError] = useState("");

  // ✅ Fetch all subcategories
  const fetchSubCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/subcategories`, { cache: "no-store" });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to fetch subcategories");
      }

      const data = await res.json();
      setSubCategories(data);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubCategories();
  }, []);

  // ✅ Refresh listener
  useEffect(() => {
    const handleRefresh = () => fetchSubCategories();
    window.addEventListener("subcategories:refresh", handleRefresh);
    return () =>
      window.removeEventListener("subcategories:refresh", handleRefresh);
  }, []);

  // ✅ Handle delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this subcategory?")) return;
    try {
      const res = await fetch(`/api/subcategories/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete subcategory");
      await fetchSubCategories();
    } catch (err) {
      console.error("Delete Error:", err);
      alert(err.message);
    }
  };

  // ✅ Handle update
  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`/api/subcategories/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to update subcategory");
      }

      setEditId(null);
      setEditForm({ title: "", description: "" });
      await fetchSubCategories();
    } catch (err) {
      console.error("Update Error:", err);
      alert(err.message);
    }
  };

  return (
    <div className="w-full">
      {loading ? (
        <div className="text-center py-5 text-gray-500 animate-pulse">
          Loading...
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-4">{error}</div>
      ) : subCategories.length > 0 ? (
        <div className="flex flex-col gap-2.5">
          {subCategories.map((sub) => (
            <div
              key={sub._id}
              className="w-full bg-[#A2B2D1] rounded-[4px] p-2 flex items-center justify-between gap-2.5"
            >
              {/* Image */}
              <div className="w-14 h-14 flex-shrink-0">
                <img
                  src={sub.image}
                  alt={sub.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col">
                {editId === sub._id ? (
                  <>
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) =>
                        setEditForm({ ...editForm, title: e.target.value })
                      }
                      className="px-2 py-1 border mb-1 rounded"
                      placeholder="Title"
                    />
                    <textarea
                      value={editForm.description}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          description: e.target.value,
                        })
                      }
                      className="px-2 py-1 border mb-1 rounded"
                      placeholder="Description"
                    />
                  </>
                ) : (
                  <>
                    <h2 className="capitalize font-semibold">{sub.title}</h2>
                    <p className="text-sm text-gray-600">
                      {sub.description.split(" ").slice(0, 10).join(" ")}
                      {sub.description.split(" ").length > 10 && "…"}
                    </p>
                  </>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2.5">
                {editId === sub._id ? (
                  <>
                    <button
                      onClick={() => handleUpdate(sub._id)}
                      className="text-xl px-3 py-1 text-green-600"
                    >
                      <MdOutlineDownloadDone />
                    </button>
                    <button
                      onClick={() => {
                        setEditId(null);
                        setEditForm({ title: "", description: "" });
                      }}
                      className="text-xl text-red-600 px-3 py-1"
                    >
                      <RxCross2 />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditId(sub._id);
                        setEditForm({
                          title: sub.title,
                          description: sub.description,
                        });
                      }}
                      className="text-xl px-3 py-1"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(sub._id)}
                      className="text-xl px-3 py-1"
                    >
                      <MdDelete />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-4">
          No subcategories found.
        </p>
      )}
    </div>
  );
}
