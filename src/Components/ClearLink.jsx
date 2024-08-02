const ClearLink = ({ clickAction, children }) => {
  return (
    <div
      className="underline cursor-pointer sort-text md:self-end text-center"
      onClick={clickAction}
    >
      {children}
    </div>
  );
};

export default ClearLink;
