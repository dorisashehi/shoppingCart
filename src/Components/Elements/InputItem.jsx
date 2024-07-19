import { useState } from "react";

const InputItem = ({
  id,
  name,
  type,
  label,
  placeholder,
  classN = "",
  changeFormData,
  inputError,
}) => {
  const handleChange = (event) => {
    //ON CHENGE INPUT VALUE
    const { name, value } = event.target;
    changeFormData({ name, value });
  };

  return (
    <>
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`input-style  border-red-500 ${classN}`}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(event) => handleChange(event)}
      />
      {inputError && (
        <p className="text-red-500 text-xs italic">{inputError}</p>
      )}
    </>
  );
};

export default InputItem;
