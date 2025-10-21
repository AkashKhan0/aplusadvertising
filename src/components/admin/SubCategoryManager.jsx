"use client";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineDownloadDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function SubCategoryManager() {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(true);

  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "" });

  // ✅ Fetch categories
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);

      if (data.length > 0) {
        setActiveTab(data[0]._id); // default first tab
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
    }
  };

  // ✅ Fetch subcategories for active tab
  const fetchSubCategories = async (categoryId) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/subcategories?categoryId=${categoryId}`, {
        cache: "no-store", // 👈 disable caching to always get fresh data
      });
      const data = await res.json();
      setSubCategories(data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (activeTab) fetchSubCategories(activeTab);
  }, [activeTab]);

  // ✅ Listen for "subcategories:refresh" events
  useEffect(() => {
    const handleRefresh = () => {
      if (activeTab) fetchSubCategories(activeTab);
    };
    window.addEventListener("subcategories:refresh", handleRefresh);
    return () => window.removeEventListener("subcategories:refresh", handleRefresh);
  }, [activeTab]);

  // ✅ Handle delete
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this subcategory?")) return;
    const res = await fetch(`/api/subcategories/${id}`, { method: "DELETE" });
    if (res.ok) fetchSubCategories(activeTab);
  };

  // ✅ Handle update
  const handleUpdate = async (id) => {
    const res = await fetch(`/api/subcategories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });
    if (res.ok) {
      setEditId(null);
      setEditForm({ title: "", description: "" });
      fetchSubCategories(activeTab);
    }
  };

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => setActiveTab(cat._id)}
            className={`px-4 py-2 rounded ${
              activeTab === cat._id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Loading / Data */}
      {loading ? (
        <div className="text-center py-5 text-gray-500 animate-pulse">
          Loading...
        </div>
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
                    />
                  </>
                ) : (
                  <>
                    <h2 className="capitalize font-semibold">{sub.title}</h2>
                    <p className="text-sm text-gray-600">
                      {sub.description.split(" ").slice(0, 10).join(" ")}
                      {sub.description.split(" ").length > 10 && "..."}
                    </p>
                  </>
                )}
              </div>

              {/* Action buttons */}
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
