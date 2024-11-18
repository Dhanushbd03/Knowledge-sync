import React from "react";

const TextArea = ({ label, name, value, onChange }) => {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="absolute -top-3 left-5 bg-clip-text px-2 font-bold text-PuertoRico"
      >
        {label}
      </label>
      <textarea
        id={name}
        onChange={onChange}
        className="w-full rounded-lg border border-t-0 border-PuertoRico bg-transparent pb-2 pl-2 pt-6 text-PuertoRico focus:outline-none"
        value={value}
      >
      </textarea>
    </div>
  );
};

export default TextArea;
