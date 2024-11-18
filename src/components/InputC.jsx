import React from "react";

const InputC = ({ label, name, type, value, onChange }) => { 
  return (
    <div className="relative">
      <label 
        htmlFor={name} 
        className="absolute -top-3 text-PuertoRico bg-clip-text font-bold left-5 px-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        id={name}
        onChange={onChange} 
        className="w-full rounded-lg border border-PuertoRico border-t-0 bg-transparent text-PuertoRico focus:outline-none pt-6 pl-2 pb-2"
      />
    </div>
  );
};

export default InputC;
