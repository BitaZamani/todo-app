import { useTasks } from "../utils/hooks/taskContext";
import { useCategories } from "../utils/hooks/categoryContext";

const Filter = () => {
  const types = ["All", "Completed", "Ongoing"];
  const { filterByType, filterByCategory, typeFilter } = useTasks();
  const { categories } = useCategories();
  return (
    <div className="flex flex-col gap-3 mb-4">
      <div className="flex gap-2">
        {types.map((type) => (
          <button
            key={type}
            className={`flex-1 py-1 rounded-md text-sm font-medium
              ${
                typeFilter === type
                  ? "bg-blue-500 text-white"
                  : "bg-blue-100 text-blue-800"
              }
              hover:bg-blue-400 hover:text-white transition`}
            onClick={() => filterByType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center gap-2">
        <span className="text-xl font-bold">{typeFilter} Tasks</span>
        <select
          className="border rounded-md px-4 py-1 text-sm"
          onChange={(e) => filterByCategory(e.target.value)}
        >
          <option value={-1}>All</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
