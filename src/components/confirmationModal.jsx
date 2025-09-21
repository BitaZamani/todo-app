const ConfirmationModal = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-90">
      <div className="bg-white rounded-lg py-5 px-3 w-80 shadow-lg">
        <h3 className="text-base font-semibold">{title}</h3>
        {message && <p className="text-gray-800 mb-4 text-sm">{message}</p>}
        <div className="flex justify-end gap-3 text-sm">
          <button
            className="px-4 py-1 bg-gray-400 rounded hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
