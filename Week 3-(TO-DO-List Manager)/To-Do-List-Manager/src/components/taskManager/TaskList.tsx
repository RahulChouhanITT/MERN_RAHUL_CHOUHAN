import type { TaskListProps } from "../../utils/interfaces/task.interface.ts";
import { TaskItem } from "./TaskItem.tsx";

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
