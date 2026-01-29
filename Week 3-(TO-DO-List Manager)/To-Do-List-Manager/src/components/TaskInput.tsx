import { useState } from "react";

interface TaskInputProps {
  onAddTask: (title: string, dueDate: string) => void;
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [dateError, setDateError] = useState(false);

  function handleAdd(): void {
     let valid = true;

     if (!title.trim()) {
      setTitleError(true);
      valid = false;
     }

     if (!dueDate) {
      setDateError(true);
      valid = false;
     }

     if (!valid) return;

     onAddTask(title, dueDate);
     setTitle("");
     setDueDate("");
     setTitleError(false);
     setDateError(false);
  }

  return (
    <section className="task-add-section-class">
      <input
         type="text"
         value={title}
         placeholder={titleError ? "Title is required" : "Enter task title"}
         onChange={(e) => {
           setTitle(e.target.value);
           setTitleError(false);
           }
         }
         className={`task-input-class ${titleError ? "input-error" : ""}`}
      />
      <input
         type="date"
         value={dueDate}
         onChange={(e) => {
           setDueDate(e.target.value);
           setDateError(false);
           }
         }
         className={`task-date-class ${dateError ? "input-error" : ""}`}
      />
      <button
         onClick={handleAdd}
         className="task-add-button-class"
         >
         Add Task
      </button>
    </section>
  );
}
