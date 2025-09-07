"use client";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineDownloadDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function ServiceList() {
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  // Fetch categories
  const fetchCategories = async () => {
    const res = await fetch("/api/categories");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle delete
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

  // Handle update
  const handleUpdate = async (id) => {
    const res = await fetch(`/api/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: editName }),
    });

    if (res.ok) {
      setEditId(null);
      setEditName("");
      fetchCategories();
    } else {
      const err = await res.json();
      alert(err.error);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2.5">
        {/* main categorys list */}
        <div className="main_cat w-full">
          <h1 className="text-2xl font-bold w-fit title1 uppercase mb-5">
            Main categorys
          </h1>

          {/* list */}
          <div className="w-full flex flex-col gap-2.5">
            {categories.map((cat) => (
              <div
                key={cat._id}
                className="w-full sm:w-full md:w-[50%] p-1 border flex items-center justify-between gap-2.5"
              >
                <div className="capitalize w-fit text-xl">
                    {editId === cat._id ? (
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="px-2 py-1 w-full"
                  />
                ) : (
                  cat.name
                )}
                </div>
                <div className="flex items-center gap-2.5">
                    {editId === cat._id ? (
                  <>
                    <button
                      onClick={() => handleUpdate(cat._id)}
                      className="text-xl px-3 py-1 text-green-600"
                    >
                      <MdOutlineDownloadDone />
                    </button>
                    <button
                      onClick={() => {
                        setEditId(null);
                        setEditName("");
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
                        setEditId(cat._id);
                        setEditName(cat.name);
                      }}
                      className="text-xl px-3 py-1"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(cat._id)}
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
        </div>

        {/* sub categorys list */}
        <div className="sub_cat w-full mt-10">
          <h1 className="text-2xl font-bold w-fit title1 uppercase mb-5">
            sub categorys
          </h1>
        </div>
      </div>
    </>
  );
}
