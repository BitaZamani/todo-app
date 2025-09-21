import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useTasks } from "../utils/hooks/taskContext";
import { useCategories } from "../utils/hooks/categoryContext";

const TaskCard = ({ task }) => {
  const { checkTask, setTaskModal, setRemoveATask, setTask } = useTasks();
  const { categories } = useCategories();
  return (
    <div
      className={`flex justify-between px-3 py-3 rounded-lg shadow-md transition-all items-start relative
        ${
          task.completed
            ? "bg-gray-100 text-gray-400 opacity-70"
            : "bg-indigo-50 hover:bg-indigo-100 text-gray-800"
        }
      `}
    >
      <div className="flex gap-3 items-start w-full overflow-hidden">
        <input
          type="checkbox"
          id={`task-${task.id}`}
          checked={task.completed}
          onChange={() => checkTask(task.id)}
          className="size-4 mt-1 accent-indigo-500"
        />

        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-800 truncate">
              {task.name}
            </span>

            <span
              className="size-3 text-xs rounded-full text-white"
              style={{
                backgroundColor: categories.find((c) => c.id === task.category)
                  ?.color,
              }}
            ></span>
          </div>

          {task.description && (
            <span className="text-sm text-gray-600 mt-1 truncate">
              {task.description}
            </span>
          )}
        </div>
      </div>

   
      <div className="flex flex-shrink-0 items-end gap-2">
        <IconTrash
          className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
          onClick={() => setRemoveATask(task.id)}
        />
        <IconEdit
          className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors"
          onClick={() => {
            setTaskModal("Edit");
            setTask(task);
          }}
        />
      </div>
    </div>
  );
};

export default TaskCard;
