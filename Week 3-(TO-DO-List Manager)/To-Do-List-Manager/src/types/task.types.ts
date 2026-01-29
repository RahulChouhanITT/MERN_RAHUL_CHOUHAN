export type TaskId = number;

export interface Task {
  id: TaskId;
  title: string;
  dueDate: string;
  completed: boolean;
}

export enum TaskFilter {
  ALL = "ALL",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}