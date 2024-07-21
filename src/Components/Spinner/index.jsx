import Loading from "../../assets/images/loading.gif";

const Spinner = ({ classN }) => {
  return (
    <div className="w-full">
      <img src={Loading} className={`${classN} m-auto`} />
    </div>
  );
};

export default Spinner;
