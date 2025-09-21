import { useEffect, useState } from "react";

export const useTaskFilter = (tasks) => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [categoryId, setcategoryId] = useState("-1");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const filterByType = (type) => setTypeFilter(type);

  const filterByCategory = (id) => setcategoryId(id);

  useEffect(() => {
    tasks.sort((a, b) => a.completed - b.completed);
    let filteredTasks = [...tasks];

    if (typeFilter === "Completed") {
      filteredTasks = filteredTasks.filter((task) => task.completed);
    } else if (typeFilter === "Ongoing") {
      filteredTasks = filteredTasks.filter((task) => !task.completed);
    } else {
      filteredTasks = filteredTasks.map((task) => task);
    }
    let catagorizedTasks;
    if (categoryId !== "-1")
      catagorizedTasks = filteredTasks.filter(
        (task) => task.category === categoryId
      );
    else if (categoryId === "-1") catagorizedTasks = [...filteredTasks];

    setFilteredTasks(catagorizedTasks);
  }, [tasks, categoryId, typeFilter]);
  return { filterByCategory, filterByType, filteredTasks, typeFilter };
};
