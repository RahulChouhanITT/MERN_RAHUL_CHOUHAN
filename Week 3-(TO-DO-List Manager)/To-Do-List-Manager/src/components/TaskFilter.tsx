import { TaskFilter } from "../types/task.types";

interface TaskFilterProps {
  onFilterChange: (filter: TaskFilter) => void;
}

export function TaskFilterButtons({ onFilterChange }: TaskFilterProps) {
  return (
    <section className="task-filter-section-class">
      <button onClick={() => onFilterChange(TaskFilter.ALL)} className="filter-button-class">All</button>
      <button onClick={() => onFilterChange(TaskFilter.COMPLETED)} className="filter-button-class">Completed</button>
      <button onClick={() => onFilterChange(TaskFilter.PENDING)} className="filter-button-class">Pending</button>
    </section>
  );
}
