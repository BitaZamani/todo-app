import { useEffect, useState } from "react";
import { getData, setData } from "../helpers/manageLocalStorage";
import { nanoid } from "nanoid";
import { useTaskFilter } from "./useTaskFilter";

export const useTaskCRUD = () => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "",
    category: "0",
    completed: false,
  });
  const [taskModal, setTaskModal] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [removeATask, setRemoveATask] = useState(null);
  const { filterByCategory, filterByType, filteredTasks, typeFilter } =
    useTaskFilter(tasks);

  useEffect(() => {
    const data = getData("tasks") || [];
    setTasks(data);
  }, []);

  const saveTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    setData("tasks", updatedTasks);
    setTask({
      id: "",
      name: "",
      description: "",
      category: "0",
      completed: false,
    });
  };

  const addTask = () => {
    if (task.name && task.category) {
      const updatedTasks = [...tasks, { ...task, id: nanoid(5) }];
      saveTasks(updatedTasks);
      setTaskModal(null);
    }
  };

  const removeTask = (id) => {
    let updatedTasks = tasks.filter((task) => task.id !== id);
    saveTasks(updatedTasks);
  };

  const checkTask = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    saveTasks(updatedTasks);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((t) =>
      t.id === updatedTask.id ? updatedTask : t
    );
    saveTasks(updatedTasks);
    setTaskModal(null);
  };

  const handleTaskSubmit = (task) => {
    if (taskModal === "Add") {
      addTask(task);
    } else {
      editTask(task);
    }
    setTaskModal(null);
    setTask({
      id: "",
      name: "",
      description: "",
      category: "0",
      completed: false,
    });
  };

  return {
    task,
    setTask,
    taskModal,
    setTaskModal,
    tasks,
    removeTask,
    checkTask,
    handleTaskSubmit,
    saveTasks,
    setRemoveATask,
    removeATask,
    filterByCategory,
    filterByType,
    filteredTasks,
    typeFilter,
  };
};
