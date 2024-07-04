const Sidebar = ({ children }) => {
  return (
    <>
      <div className="fixed top-0 bg-backdrop left-0 w-[100%] z-40 p-5 h-[100%] flex flex-col md:hidden"></div>
      <div className="fixed top-0 bg-white left-0 w-[80%] z-50 p-5 h-[100%] flex flex-col md:hidden">
        {children}
      </div>
    </>
  );
};

export default Sidebar;
