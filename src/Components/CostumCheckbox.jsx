import { useState } from "react";

const CostumCheckbox = ({ label, handleSelected, checked }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChecked = (e) => {
    setIsChecked(!isChecked);
    handleSelected(e);
  };

  return (
    <label htmlFor={label} className="cursor-pointer relative flex">
      <input
        type="checkbox"
        id={label}
        value={label}
        className=" appearance-none h-4 w-4 border-2 rounded-[0.2em] border-borderColor cat-checkbox"
        checked={checked}
        onChange={handleChecked}
      />
      <svg
        className="text-white h-2.5 rounded-3x w-2.5 absolute left-[3px] top-[3px] opacity-0 ease-in transition-opacity"
        data-slot="icon"
        fill="none"
        strokeWidth="3.9"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        ></path>
      </svg>
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default CostumCheckbox;
