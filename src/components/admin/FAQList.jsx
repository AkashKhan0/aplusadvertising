"use client";
import { useEffect, useState } from "react";

export default function FAQList() {
  const [faqs, setFaqs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ question: "", answer: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFaqs();
  }, []);

  async function fetchFaqs() {
    const res = await fetch("/api/faq");
    const data = await res.json();
    if (data.success) setFaqs(data.data);
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function startEdit(faq) {
    setEditingId(faq._id);
    setForm({ question: faq.question, answer: faq.answer });
  }

  function cancelEdit() {
    setEditingId(null);
    setForm({ question: "", answer: "" });
  }

  async function handleUpdate(e) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/faq/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      setFaqs((prev) => prev.map((f) => (f._id === editingId ? data.data : f)));
      cancelEdit();
    }
    setLoading(false);
  }

  async function handleDelete(id) {
    if (!confirm("Delete this FAQ?")) return;
    const res = await fetch(`/api/faq/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (data.success) {
      setFaqs((prev) => prev.filter((f) => f._id !== id));
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold title1 mb-5">All FAQs</h1>
      {faqs.length === 0 ? (
        <p>No FAQs yet.</p>
      ) : (
        <ul style={{ listStyle: "square", padding: 10 }}>
          {faqs.map((f) => (
            <li
              key={f._id}
              className="mb-5"
            >
              {editingId === f._id ? (
                <form onSubmit={handleUpdate}>
                  <input
                    type="text"
                    name="question"
                    value={form.question}
                    onChange={handleChange}
                    className="w-full mb-3 border p-2"
                  />
                  <textarea
                    name="answer"
                    value={form.answer}
                    onChange={handleChange}
                    rows={3}
                    className="w-full mb-3 border p-2"
                  />
                  <div className="flex items-center gap-5">
                    <button
                      className="bg-[#3d3d3d] text-white px-4 py-1"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Updating..." : "Update"}
                    </button>
                    <button
                      className="bg-[#3d3d3d] text-white px-4 py-1"
                      type="button"
                      onClick={cancelEdit}
                      style={{ marginLeft: 8 }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h1 className="text-2xl font-bold">{f.question}</h1>
                  <p className="text-lg mb-2">{f.answer}</p>
                  <div className="flex items-center gap-5">
                    <button
                      className="bg-[#3d3d3d] text-white px-4 py-1"
                      onClick={() => startEdit(f)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-[#3d3d3d] text-white px-4 py-1"
                      onClick={() => handleDelete(f._id)}
                      style={{ marginLeft: 8 }}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
