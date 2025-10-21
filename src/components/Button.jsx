import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass} transition-transform group-hover:scale-110`}
    >
      <span className="absolute h-0 w-0 rounded-full bg-blue-200 transition-all duration-300 group-hover:h-56 group-hover:w-full hover:border-black group-hover:scale-110"></span>

      <span className="relative inline-flex items-center gap-1 font-general text-xs uppercase group-hover:text-white">
        {leftIcon}
        <div>{title}</div>
        {rightIcon}
      </span>
    </button>
  );
};

export default Button;
