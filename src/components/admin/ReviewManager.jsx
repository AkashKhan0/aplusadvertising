"use client";
import { useEffect, useState } from "react";

export default function ReviewManager() {
  const [reviews, setReviews] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: "", message: "", rating: 1 });

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
      <h1 className="text-xl font-bold mb-4">Manage Reviews</h1>
      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r._id} className="border p-3 rounded">
            {editId === r._id ? (
              <>
                <input
                  type="text"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  className="border p-1 mr-2"
                />
                <input
                  type="text"
                  value={editData.message}
                  onChange={(e) => setEditData({ ...editData, message: e.target.value })}
                  className="border p-1 mr-2"
                />
                <select
                  value={editData.rating}
                  onChange={(e) => setEditData({ ...editData, rating: e.target.value })}
                  className="border p-1 mr-2"
                >
                  {[1, 2, 3, 4, 5].map((r) => (
                    <option key={r} value={r}>{r} Star</option>
                  ))}
                </select>
                <button onClick={updateReview} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                  Save
                </button>
                <button onClick={() => setEditId(null)} className="bg-gray-500 text-white px-2 py-1 rounded">
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p><strong>{r.name}</strong> ({r.rating}⭐)</p>
                <p>{r.message}</p>
                <button onClick={() => { setEditId(r._id); setEditData(r); }} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => deleteReview(r._id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
