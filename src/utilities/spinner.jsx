import React from "react";

const Spinner = ({ size = "w-10 h-10", color = "border-teal-500" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-4 border-solid border-gray-200 border-t-transparent ${color} ${size}`}
      ></div>
    </div>
  );
};

export default Spinner;
