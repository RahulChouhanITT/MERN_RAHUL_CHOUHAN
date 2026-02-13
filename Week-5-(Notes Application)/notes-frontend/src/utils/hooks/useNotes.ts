import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import type { BackendNote, Note } from "../../types/notes.types";

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  const mapNote = (note: BackendNote): Note => ({
    id: note._id,
    title: note.title,
    description: note.description,
  });

  const fetchNotes = async () => {
    try {
      const response = await axiosInstance.get("/notes");

      const formatted = response.data.data.map((note: BackendNote) =>
        mapNote(note)
      );

      setNotes(formatted);
    } catch {
      console.log("Failed to fetch notes");
    } finally {
      setLoading(false);
    }
  };

  const createNote = async (noteData: Omit<Note, "id">) => {
    const response = await axiosInstance.post("/notes", noteData);

    setNotes((prev) => [...prev, mapNote(response.data.data)]);
  };

  const updateNote = async (id: string, noteData: Omit<Note, "id">) => {
    const response = await axiosInstance.put(`/notes/${id}`, noteData);

    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? mapNote(response.data.data) : note
      )
    );
  };

  const deleteNote = async (id: string) => {
    await axiosInstance.delete(`/notes/${id}`);
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return {
    notes,
    loading,
    createNote,
    updateNote,
    deleteNote
  };
};
