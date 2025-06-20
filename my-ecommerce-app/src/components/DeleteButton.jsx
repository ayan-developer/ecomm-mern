import React from 'react';

const DeleteButton = ({ onDelete }) => {

  return (
    <button
      onClick={onDelete}
      className="
        px-3 py-1 rounded text-white bg-red-500 hover:bg-red-600 
        focus:outline-none focus:ring-2 focus:ring-red-400
        transition duration-200 ease-in-out
      "
    >
      Delete
    </button>
  );
};

export default DeleteButton;
