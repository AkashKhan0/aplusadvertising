"use client";
import { useState } from "react";

export default function FAQForm({ onAdded }) {
  const [form, setForm] = useState({ question: "", answer: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.question.trim() || !form.answer.trim()) {
      setError("Question and Answer required");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/faq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to add FAQ");

      setForm({ question: "", answer: "" });
      if (onAdded) onAdded(data.data); // parent কে notify করবে
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold title1 mb-5">Add FAQ</h1>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <div>
        <label className="text-2xl">Question</label>
        <input
          type="text"
          name="question"
          value={form.question}
          onChange={handleChange}
          placeholder="Enter question"
          className="p-2 border w-full my-2"
        />
      </div>
      <div>
        <label className="text-xl">Answer</label>
        <textarea
          name="answer"
          value={form.answer}
          onChange={handleChange}
          placeholder="Enter answer"
          rows={4}
          className="p-2 border w-full my-2"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-[#3d3d3d] text-white rounded"
      >
        {loading ? "Saving..." : "Save FAQ"}
      </button>
    </form>
  );
}
