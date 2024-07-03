const CostumCheckbox = ({ label }) => {
  return (
    <label htmlFor="check-box-1" className="cursor-pointer relative">
      <input
        type="checkbox"
        id="check-box-1"
        className=" appearance-none h-4 w-4 border-2 rounded-3x border-border"
      />
      <svg
        className="check-1 bg-primary text-white h-4 w-4 absolute left-0 top-[-4px] opacity-0 ease-in transition-opacity"
        data-slot="icon"
        fill="none"
        strokeWidth="1.5"
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
      <span>{label}</span>
    </label>
  );
};

export default CostumCheckbox;
