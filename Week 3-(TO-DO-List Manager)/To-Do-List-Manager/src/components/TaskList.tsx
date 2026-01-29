import type { Task } from "../types/task.types";
import { TaskItem } from "./TaskItem.tsx";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

export function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  return (
    <ul className="task-list-class">
      {tasks.map(task => (
         <TaskItem
           key={task.id}
           task={task}
           onToggleTask={onToggleTask}
           onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
