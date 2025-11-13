"use client";
import { useEffect, useState } from "react";
import { FiEdit2, FiTrash2, FiCheck, FiX } from "react-icons/fi";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    if (res.ok) {
      setProjects(await res.json());
    }
  };

  useEffect(() => {
    fetchProjects();
    window.addEventListener("projects:refresh", fetchProjects);
    return () => window.removeEventListener("projects:refresh", fetchProjects);
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this project?")) return;
    const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
    if (res.ok) fetchProjects();
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setEditData({
      title: project.title,
      description: project.description,
      link: project.link,
      image: project.image, // use existing URL
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = async (id) => {
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });

      const data = await res.json();
      console.log("Update response:", res.status, data); // optional debugging

      if (!res.ok) throw new Error("Update failed");

      setEditingId(null);
      setEditData({});
      fetchProjects();
    } catch (err) {
      console.error(err);
      alert("Failed to update project.");
    }
  };

  return (
    <div className="grid gap-4">
      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        projects.map((p) => (
          <div
            key={p._id}
            className="p-4 rounded flex items-start justify-between gap-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-lg"
          >
            <div className="w-full flex items-stretch gap-2">
              <img
                src={editingId === p._id ? editData.image : p.image}
                alt={p.title}
                className="w-[320px] h-full object-contain"
              />

              <div className="w-full flex flex-col gap-2">
                {editingId === p._id ? (
                  <>
                    <input
                      type="text"
                      name="title"
                      value={editData.title || ""}
                      onChange={handleChange}
                      className="w-full border px-2 py-1 rounded"
                    />
                    <textarea
                      name="description"
                      value={editData.description || ""}
                      onChange={handleChange}
                      className="w-full border px-2 py-1 rounded resize-none"
                    />
                    <input
                      type="text"
                      name="link"
                      value={editData.link || ""}
                      onChange={handleChange}
                      className="w-full border px-2 py-1 rounded"
                    />
                    <input
                      type="text"
                      name="image"
                      value={editData.image || ""}
                      onChange={handleChange}
                      className="w-full border px-2 py-1 rounded"
                      placeholder="Image URL"
                    />
                  </>
                ) : (
                  <>
                    <h3 className="font-bold text-2xl capitalize">{p.title}</h3>
                    <p>{p.description}</p>
                    <a
                      href={p.link}
                      target="_blank"
                      className="text-blue-600 underline"
                    >
                      {p.link}
                    </a>
                  </>
                )}
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              {editingId === p._id ? (
                <>
                  <button
                    onClick={() => handleSave(p._id)}
                    className="bg-green-500 text-white p-2 rounded"
                    title="Save"
                  >
                    <FiCheck size={18} />
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-400 text-white p-2 rounded"
                    title="Cancel"
                  >
                    <FiX size={18} />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-blue-500 text-white p-2 rounded"
                    title="Edit"
                  >
                    <FiEdit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="bg-red-500 text-white p-2 rounded"
                    title="Delete"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
