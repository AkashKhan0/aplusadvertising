"use client";
import { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import "../styles/slider.css";

function StarRating({ value, onChange }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className={`cursor-pointer text-3xl transition-colors ${
            star <= (hover || value) ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Review({ onClose, onReviewAdded  }) {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    rating: 1,
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState(""); // success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const res = await fetch("/api/takereview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setMsg("✅ Review submitted successfully!");
      setMsgType("success");
      setFormData({ name: "", message: "", rating: 1 });

      if (onReviewAdded) onReviewAdded(); // নতুন রিভিউ parent কে জানাবে

      // ১ সেকেন্ড পর popup auto close
      setTimeout(() => {
        onClose();
      }, 1000);
    } else {
      setMsg("❌ Error submitting review.");
      setMsgType("error");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#000000ab] bg-opacity-50 rvw-box">
      <div className="bg-white p-6 rounded w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          <GiCrossMark />
        </button>

        <h2 className="text-lg font-bold mb-4">Write Your Review</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border w-full p-2"
          />
          <textarea
            name="message"
            placeholder="Your Review"
            value={formData.message}
            onChange={handleChange}
            required
            className="border w-full p-2"
          />

          <StarRating
            value={formData.rating}
            onChange={(rating) => setFormData({ ...formData, rating })}
          />

          {msg && (
            <p
              className={`text-sm ${
                msgType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {msg}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
