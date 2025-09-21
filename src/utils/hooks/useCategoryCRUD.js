import { useEffect, useMemo, useState } from "react";
import { getData, setData } from "../helpers/manageLocalStorage";
import { nanoid } from "nanoid";

export const useCategoryCRUD = ({ tasks, saveTasks }) => {
  const defaultCategories = useMemo(
    () => [
      { id: "0", name: "Default", color: "#9CA3AF" },
      { id: nanoid(5), name: "Personal", color: "#F87171" },
      { id: nanoid(5), name: "Work", color: "#60A5FA" },
      { id: nanoid(5), name: "Education", color: "#dc6a4a" },
    ],
    []
  );

  const [categories, setCategories] = useState(defaultCategories);
  const [removeAcategory, setRemoveACategory] = useState(null);
  const [categoryModal, setCategoryModal] = useState(false);
  const [category, setCategory] = useState({
    id: "",
    name: "",
    color: "#60a5fa",
  });
  useEffect(() => {
    const storedCategories = getData("categories");
    if (storedCategories.length > 0) {
      setCategories(storedCategories);
    } else {
      setData("categories", defaultCategories);
    }
  }, [defaultCategories]);
  const addCategory = () => {
    if (category.color && category.name) {
      const updatedCategories = [...categories, { ...category, id: nanoid(5) }];
      setCategories(updatedCategories);
      setData("categories", updatedCategories);
      setCategory({ id: "", name: "", color: "#60a5fa" });
    }
  };

  const removeCategory = (cat) => {
    console.log(cat);
    if (cat.id === "0") {
      console.log("cant delete");
    } else {
      let updatedCategories = categories.filter(
        (category) => category.id !== cat.id
      );
      setCategories(updatedCategories);
      setData("categories", updatedCategories);
      const updatedTasks = tasks.map((task) =>
        task.category === cat.id ? { ...task, category: "0" } : task
      );
      saveTasks(updatedTasks);
    }
  };
  return {
    categories,
    addCategory,
    removeCategory,
    removeAcategory,
    setRemoveACategory,
    categoryModal,
    setCategoryModal,
    setCategory,
    category,
  };
};
