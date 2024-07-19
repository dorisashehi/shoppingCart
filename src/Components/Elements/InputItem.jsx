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
  setError,
}) => {
  const testField = (regEX, input, value, errMsg) => {
    //VALIDATE INPUT BASED ON REGEX
    //TEST BASED ON REG EX EXPRESION PASED

    let timer;
    clearTimeout(timer);
    removeError(name); //REMOVE ERROR

    timer = setTimeout(() => {
      //VALIDATE AFTER SOME TIME
      if (!regEX.test(value)) {
        setError(input, errMsg); //SET ERROR
        return false;
      }
    }, 1000);
  };

  const handleChange = (event) => {
    //ON CHENGE INPUT VALUE
    const { name, value } = event.target;
    if (name.value !== "") {
      //REMOVE ERROR REQUIRED IF THE INPUT GETS FILLED
      removeError(name);
    }
    if (name === "email") {
      let regEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      testField(regEX, name, value, "Email not valid"); //TEST EMAIL FIELD BASED ON REGEX
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
