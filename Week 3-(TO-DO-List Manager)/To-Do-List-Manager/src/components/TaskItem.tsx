import type { Task } from "../types/task.types";

interface TaskItemProps {
  task: Task;
  onToggleTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

export function TaskItem({ task, onToggleTask, onDeleteTask }: TaskItemProps) {
  return (
    <li className="task-item-class">
      <div className="task-info-class">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          className="task-checkbox-class"
        />
        <span className="task-text-class">{task.title}</span>
        <span className="task-date-text-class">{task.dueDate}</span>
      </div>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="task-delete-button-class">
        Delete
      </button>
    </li>
  );
}
