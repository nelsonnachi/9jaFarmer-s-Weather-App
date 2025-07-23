import React from "react";

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg px-6 py-10 relative max-w-sm text-center">
        <button
          className="absolute top-2 right-3 text-[28px] text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mx-auto p-4 rounded-lg shadow-md h-[150px] flex items-center justify-center">
          <p className="text-gray-800 font-medium text-[20px]">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
