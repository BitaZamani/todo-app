import { useTasks } from "../utils/hooks/taskContext";
import { useCategories } from "../utils/hooks/categoryContext";

const TaskModal = () => {
  const { categories } = useCategories();
  const { task, setTask, TaskModal, setTaskModal, handleTaskSubmit } =
    useTasks();
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <div className="bg-white rounded-2xl shadow-lg w-10/12 max-w-md p-6">
        <h3 className="font-semibold text-lg mb-4">
          {TaskModal === "Add" ? "Add a task" : "Edit the task"}
        </h3>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex flex-col gap-1">
            <label htmlFor="task-name" className="font-medium">
              Task
            </label>
            <input
              className="input"
              id="task-name"
              type="text"
              minLength={2}
              maxLength={60}
              value={task.name || ""}
              onChange={(e) => setTask({ ...task, name: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="categories" className="font-medium">
              Category
            </label>
            <select
              id="categories"
              className="input"
              value={task.category}
              onChange={(e) => setTask({ ...task, category: e.target.value })}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="font-medium">
              Description{" "}
              <span className="text-gray-500 text-xs">Optional</span>
            </label>
            <textarea
              className="input resize-none"
              id="description"
              value={task.description || ""}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-5 text-sm">
          <button
            onClick={() => setTaskModal(null)}
            className="px-4 py-1 rounded-md bg-gray-400 hover:bg-gray-300"
          >
            Close
          </button>
          <button
            onClick={() => handleTaskSubmit(task)}
            className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            {TaskModal === "Add" ? "Add" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
