import React from "react";

const sizes = {
  small: "text-[12px] px-3 py-1 uppercase font-semibold text-center",
  medium: "text-[14px] px-6 py-4 font-medium",
  large: "text-[16px] px-10 py-4 font-medium",
};

const variations = {
  primary: "text-white bg-indigo-600 hover:bg-indigo-700",
  secondary:
    "text-gray-600 bg-white border border-gray-200 hover:bg-gray-50",
  danger: "text-red-100 bg-red-700 hover:bg-red-800",
};

function Button({
  children,
  onClick,
  variation = "primary",
  size = "medium",
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md cursor-pointer transition-all duration-200 border-none 
      ${sizes[size]} 
      ${variations[variation]} 
      ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;