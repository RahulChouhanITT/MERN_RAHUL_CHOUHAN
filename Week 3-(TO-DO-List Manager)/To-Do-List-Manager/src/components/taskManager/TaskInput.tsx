import { useState } from "react";
import type { TaskInputProps } from "../../utils/interfaces/task.interface";
import { emptyString, ErrorState } from "../../utils/labels/constants";

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [title, setTitle] = useState(emptyString);
  const [dueDate, setDueDate] = useState(emptyString);
  const [titleError, setTitleError] = useState(ErrorState);
  const [dateError, setDateError] = useState(ErrorState);

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
     setTitle(emptyString);
     setDueDate(emptyString);
     setTitleError(ErrorState);
     setDateError(ErrorState);
  }

  return (
    <section className="task-add-section-class">
      <input
         type="text"
         value={title}
         placeholder={titleError ? "Title is required" : "Enter task title"}
         onChange={(event) => {
           setTitle(event.target.value);
           setTitleError(false);
           }
         }
         className={`task-input-class ${titleError ? "input-error" : ""}`}
      />
      <input
         type="date"
         value={dueDate}
         onChange={(event) => {
           setDueDate(event.target.value);
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
