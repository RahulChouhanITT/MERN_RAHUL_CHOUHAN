import type { TaskFilterProps } from "../../utils/interfaces/task.interface";
import { TaskFilter } from "../../utils/types/task.types";

export function TaskFilterButtons({ onFilterChange }: TaskFilterProps) {
  return (
    <section className="task-filter-section-class">
      <button onClick={() => onFilterChange(TaskFilter.ALL)} className="filter-button-class">All</button>
      <button onClick={() => onFilterChange(TaskFilter.COMPLETED)} className="filter-button-class">Completed</button>
      <button onClick={() => onFilterChange(TaskFilter.PENDING)} className="filter-button-class">Pending</button>
    </section>
  );
}
