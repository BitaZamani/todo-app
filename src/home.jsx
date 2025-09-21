import Header from "./components/header";
import { useTaskCRUD } from "./utils/hooks/useTaskCRUD";
import { useCategoryCRUD } from "./utils/hooks/useCategoryCRUD";
import { TaskContext } from "./utils/hooks/taskContext";
import { CategoryContext } from "./utils/hooks/categoryContext";
import { IconCategory, IconPlus } from "@tabler/icons-react";
import Filter from "./components/filter";
import TaskGrid from "./components/tasksGrid";
import TaskModal from "./components/taskModal";
import ConfirmationModal from "./components/confirmationModal";
import CategoryModal from "./components/categoryModal";
const Home = () => {
  const taskHook = useTaskCRUD();
  const categoryHook = useCategoryCRUD(taskHook.tasks, taskHook.saveTasks);
  return (
    <div className="bg-blue-300 min-h-screen px-3 flex flex-col">
      <Header />
      <TaskContext.Provider value={taskHook}>
        <CategoryContext.Provider value={categoryHook}>
          <div className="p-4 bg-white rounded-xl shadow-md relative flex-1 my-5">
            <div className="flex gap-3 text-sm mb-4">
              <button
                className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md font-medium hover:bg-blue-200 transition"
                onClick={() => taskHook.setTaskModal("Add")}
              >
                <IconPlus size={16} />
                New Task
              </button>
              <button
                className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1.5 rounded-md font-medium hover:bg-green-200 transition"
                onClick={() => categoryHook.setCategoryModal(true)}
              >
                <IconCategory size={16} />
                New Category
              </button>
            </div>

            <Filter />
            <TaskGrid />

            {taskHook.taskModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <TaskModal />
              </div>
            )}

            {taskHook.removeATask && (
              <ConfirmationModal
                title={"Are you sure?"}
                message={"You are deleting a task and this can not be undone."}
                onCancel={() => taskHook.setRemoveATask(null)}
                onConfirm={() => {
                  taskHook.removeTask(taskHook.removeATask);
                  taskHook.setRemoveATask(null);
                }}
              />
            )}
            {categoryHook.removeAcategory && (
              <ConfirmationModal
                title={"Are you sure?"}
                message={
                  "Deleting this category, reset all its related tasks to default."
                }
                onCancel={() => categoryHook.setRemoveACategory(null)}
                onConfirm={() => {
                  categoryHook.setRemoveACategory(null);
                  categoryHook.removeCategory(categoryHook.removeAcategory);
                }}
              />
            )}
            {categoryHook.categoryModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <CategoryModal />
              </div>
            )}
          </div>
        </CategoryContext.Provider>
      </TaskContext.Provider>
    </div>
  );
};
export default Home;
