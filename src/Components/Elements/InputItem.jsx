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
  value,
}) => {
  const testField = (regEX, input, value, errMsg, callback) => {
    //VALIDATE INPUT BASED ON REGEX

    let timer;
    clearTimeout(timer);
    removeError(name); //REMOVE ERROR

    timer = setTimeout(() => {
      //VALIDATE AFTER SOME TIME
      if (!regEX.test(value)) {
        setError(input, errMsg); //SET ERROR
        if (callback) callback(false);
      } else {
        if (callback) callback(true);
      }
    }, 600);
  };

  const handleChange = (event) => {
    //ON CHENGE INPUT VALUE
    const { name, value } = event.target; //GET NAME AND VALUE OF INPUT

    if (name.value !== "") {
      //TEST IF REQUIRED FIELD
      //REMOVE ERROR REQUIRED IF THE INPUT GETS FILLED
      removeError(name);
    }

    if (name === "email") {
      //TEST EMAIL INPUT
      let regEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      testField(regEX, name, value, "Email not valid"); //TEST EMAIL FIELD BASED ON REGEX
    }

    if (name === "zip") {
      //TEST ZIP CODE FOR LENGTH AND CONTENT
      let regEX = /^[0-9]*$/;
      testField(
        regEX,
        name,
        value,
        "Zip Should contains numbers not charaacters",
        (isValid) => {
          if (isValid && value.length > 5) {
            setError(name, "Zip code not more than 5 numbers"); //SET ERROR
          }
        }
      ); //TEST EMAIL FIELD BASED ON REGEX
    }

    if (name === "phone") {
      //TEST PHONE CONTENT
      let regEX = /^[0-9]*$/;
      testField(regEX, name, value, "Phone number should contain numbers"); //TEST EMAIL FIELD BASED ON REGEX
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
        value={value}
        onChange={(event) => handleChange(event)}
      />
      {inputError && (
        <p className="text-red-500 text-xs italic">{inputError}</p>
      )}
    </>
  );
};

export default InputItem;
