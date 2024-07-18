const InputItem = ({
  id,
  type,
  label,
  placeholder,
  errorMsg = "",
  classN = "",
}) => {
  return (
    <>
      <label className="input-label" for={id}>
        {label}
      </label>
      <input
        className="input-style  border-red-500"
        id={id}
        type="text"
        placeholder={placeholder}
      />
      <p className="text-red-500 text-xs italic">{errorMsg}</p>
    </>
  );
};

export default InputItem;
