"use client";
import { useState } from "react";
import AddSubCategory from "./AddSubCategory";

export default function AddService() {
  const [categoryname, setCategoryname] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: categoryname }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessage(`✅ Category "${data.name}" added successfully!`);
        setCategoryname("");
      } else {
        const error = await res.json();
        setMessage(`❌ ${error.error}`);
      }
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="w-full">
        <h1 className="text-2xl font-bold w-fit title1 mb-2.5">
          Add Services Category
        </h1>

        {/* add services category name */}
        <div className="flex justify-between gap-2.5">
          <form
            onSubmit={handleSubmit}
            className="w-full flex items-center gap-2.5"
          >
            <input
              type="text"
              placeholder="Category name..."
              value={categoryname}
            onChange={(e) => setCategoryname(e.target.value)}
              className="w-[80%] px-3 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
            disabled={loading}
              className="w-[20%] bg-[#9C1F0E] text-white py-2 px-5"
            >
              {loading ? "Adding..." : "Add category"}
            </button>
          </form>
        </div>
        {message && <p className="mt-2 text-sm">{message}</p>}
      </div>


      {/* add services sub category name */}
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
