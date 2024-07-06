import Loading from "../../assets/images/loading.gif";

const Spinner = () => {
  return (
    <div className="w-full">
      <img src={Loading} className="w-[200px] m-auto" />
    </div>
  );
};

export default Spinner;
