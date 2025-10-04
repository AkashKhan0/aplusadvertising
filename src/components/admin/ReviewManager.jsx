"use client";
import { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { MdDone } from "react-icons/md";

export default function ReviewManager() {
  const [reviews, setReviews] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    message: "",
    rating: 1,
  });

  const fetchReviews = async () => {
    const res = await fetch("/api/takereview");
    const data = await res.json();
    if (data.success) setReviews(data.reviews);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const deleteReview = async (id) => {
    await fetch(`/api/takereview/${id}`, {
      method: "DELETE",
    });
    fetchReviews();
  };

  const updateReview = async () => {
    await fetch(`/api/takereview/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });
    setEditId(null);
    fetchReviews();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Reviews</h1>
      <div className="flex flex-col gap-2">
        {reviews.map((r) => (
          <div key={r._id} className="bg-[#a2b2d163] py-2 px-4 rounded ">
            {editId === r._id ? (
              <>
                <div className="flex justify-between gap-2.5 items-center w-full">

                    {/* name box */}
                  <div className="w-[20%]">
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                      className="w-full py-1 px-2 bg-[#CBD6EB]"
                    />
                  </div>

                  {/* message box */}
                  <div className="w-[40%]">
                    <input
                      type="text"
                      value={editData.message}
                      onChange={(e) =>
                        setEditData({ ...editData, message: e.target.value })
                      }
                      className="bg-[#CBD6EB] py-1 px-2 w-full"
                    />
                  </div>

                  {/* review selector */}
                  <div className="w-[20%]">
                    <select
                      value={editData.rating}
                      onChange={(e) =>
                        setEditData({ ...editData, rating: e.target.value })
                      }
                      className="bg-[#CBD6EB] py-1 px-2 w-full text-xl"
                    >
                      {[1, 2, 3, 4, 5].map((r) => (
                        <option key={r} value={r}>
                          {r} Star
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* edit update button */}
                  <div className="w-[20%] flex justify-end gap-2.5">
                    <button
                      onClick={updateReview}
                      className="text-[#009213] bg-[#CBD6EB] text-xl px-2 py-1 rounded"
                    >
                      <MdDone />
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="text-[#990000] bg-[#CBD6EB] text-xl px-2 py-1 rounded"
                    >
                      <GiCrossMark />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center w-full">
                  <div className="w-[20%]">
                    <p className="font-semibold text-xl capitalize">
                      {r.name} ({r.rating}⭐)
                    </p>
                  </div>

                  <div className="w-[50%]">
                    <p>{r.message}</p>
                  </div>

                  <div className="flex items-center justify-end w-[30%] gap-2.5">
                    <button
                      onClick={() => {
                        setEditId(r._id);
                        setEditData(r);
                      }}
                      className="text-[#3d3d3d] px-2 py-1 rounded text-xl"
                    >
                      <GrEdit />
                    </button>
                    <button
                      onClick={() => deleteReview(r._id)}
                      className="text-[#3d3d3d] px-2 py-1 rounded text-xl"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
