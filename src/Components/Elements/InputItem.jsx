const InputItem = ({
  id,
  name,
  type,
  label,
  placeholder,
  classN = "",
  changeFormData,
  inputError,
  removeError,
}) => {
  const handleChange = (event) => {
    //ON CHENGE INPUT VALUE
    const { name, value } = event.target;
    if (name.value !== "") {
      //REMOVE ERROR REQUIRED IF THE INPUT GETS FILLED
      removeError(name);
    }
    changeFormData({ name, value }); //SAVE INPUT DATA TO FORM DATA
  };

  return (
    <>
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`input-style ${inputError && "error"} ${classN}`}
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
