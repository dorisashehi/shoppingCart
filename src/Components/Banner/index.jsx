const Banner = ({ title, path }) => {
  return (
    <div className="mt-[82px] bg-sectionColor w-full">
      <div className="content justify-center flex flex-col h-[200px] lg:min-h-[250px] ">
        <div className="text-center">
          <h1 className="font-epilogue font-medium text-primary text-[25px] lg:text-[41px]">
            {title}
          </h1>
          <div className="text-[#565D6DFF] font-medium ">{path}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
