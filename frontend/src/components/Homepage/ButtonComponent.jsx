// src/components/ButtonComponent.js
import React from "react";

const ButtonComponent = ({ text, onClick, variant }) => {
  const buttonClasses = {
    edit: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded",
    delete: "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded",
  };

  return (
    <button onClick={onClick} className={buttonClasses[variant]}>
      {text}
    </button>
  );
};

export default ButtonComponent;
