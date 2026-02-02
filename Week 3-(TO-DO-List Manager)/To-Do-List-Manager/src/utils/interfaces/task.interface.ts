import type { Task, TaskFilter } from "../types/task.types";

export interface TaskFilterProps {
  onFilterChange: (filter: TaskFilter) => void;
}
export interface TaskInputProps {
  onAddTask: (title: string, dueDate: string) => void;
}
export interface TaskItemProps {
  task: Task;
  onToggleTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}
export interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}
