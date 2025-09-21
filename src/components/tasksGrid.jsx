import React from "react";
import TaskCard from "./taskCard";
import { useTasks } from "../utils/hooks/taskContext";

const TaskGrid = () => {
  const { filteredTasks } = useTasks();
  return (
    <section className="overflow-y-scroll">
      {filteredTasks.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-h-[60vh]">
          {filteredTasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      ) : (
        <span className="text-gray-500 text-lg font-semibold mt-10 block w-full text-center">
          No tasks.
        </span>
      )}
    </section>
  );
};

export default TaskGrid;
