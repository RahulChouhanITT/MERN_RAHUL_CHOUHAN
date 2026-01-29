import { useEffect, useState } from "react";
import  { type Task, TaskFilter } from "./types/task.types";
import { TaskInput } from "./components/TaskInput";
import { TaskFilterButtons } from "./components/TaskFilter";
import { TaskList } from "./components/TaskList";
import './App.css';

const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";

export function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
       const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
       return storedTasks ? JSON.parse(storedTasks) : [];
      }
  );
  const [currentFilter, setCurrentFilter] = useState<TaskFilter>(TaskFilter.ALL);

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === TaskFilter.COMPLETED) return task.completed;
    if (currentFilter === TaskFilter.PENDING) return !task.completed;
    return true;
    }
  );

  const completedCount = tasks.reduce(
    (count, task) => (task.completed ? count + 1 : count),
    0
  );

  function addTask(title: string, dueDate: string): void {
    setTasks(prev => [
      ...prev,
      { id: Date.now(), title, dueDate, completed: false },
    ]);
  }

  function toggleTask(taskId: number): void {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(taskId: number): void {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  }

  return (
    <div className="app-container-class">
      <header className="app-header-class">
       <h1 className="app-title-class">Task Management Application</h1>
     </header>
      <TaskInput onAddTask={addTask} />
      <TaskFilterButtons onFilterChange={setCurrentFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
     <footer className="task-footer-class">
      <p className="task-stats-class">
        Completed Tasks: {completedCount}
      </p>
    </footer>
    </div>
  );
}
 export default App;