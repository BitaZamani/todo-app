import { IconTrash, IconPlus, IconX } from "@tabler/icons-react";
import { useCategories } from "../utils/hooks/categoryContext";

const CategoryModal = () => {
  const {
    categories,
    addCategory,
    setRemoveACategory,
    setCategoryModal,
    category,
    setCategory,
  } = useCategories();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 z-30">
      <div className="bg-white rounded-lg p-6 w-10/12 max-w-md shadow-lg flex flex-col gap-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-gray-700">
            Manage Categories
          </h3>
          <IconX onClick={() => setCategoryModal(false)} />
        </div>

        <div className="flex gap-2 items-end justify-center">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="category-name">Category:</label>
            <input
              type="text"
              id="category-name"
              className="input w-full"
              value={category.name}
              onChange={(e) =>
                setCategory({ ...category, name: e.target.value })
              }
            />
          </div>
          <input
            type="color"
            className="w-10 rounded-[5px]"
            value={category.color}
            onChange={(e) =>
              setCategory({ ...category, color: e.target.value })
            }
          />
        </div>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 flex items-center gap-1 justify-center"
          onClick={addCategory}
        >
          <IconPlus size={16} /> Add
        </button>

        <div className="flex flex-col gap-2 max-h-64 overflow-y-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex justify-between items-center px-2 py-1 rounded shadow-sm"
              style={{ backgroundColor: category.color }}
            >
              <span className="truncate">{category.name}</span>
              <IconTrash
                className="cursor-pointer text-red-500 hover:text-red-700"
                onClick={() => setRemoveACategory(category)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
