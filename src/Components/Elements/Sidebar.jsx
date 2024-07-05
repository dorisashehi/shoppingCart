import { useState } from "react";

const Sidebar = ({ sidebarOpened, handleOpenSidebar, children }) => {
  const [sidebar, setClose] = useState(false);
  const handleCloseSidebar = () => {
    //CLOSE SIDEBAR
    setClose(false); //CLOSE SIDEBAR
    handleOpenSidebar(); //ON CLOSE SIDEBAR, CALL PARENT FUNCTION TO CHNAGE STATE OF sidebarOpened
  };

  const [prevSidebarOpened, setSidebarOpened] = useState(sidebarOpened);
  if (prevSidebarOpened !== sidebarOpened) {
    //ON PROP sidebarOpened CHANGED, CHANGE SIDEBAR STATE TO TRUE
    setSidebarOpened(sidebarOpened);
    setClose(sidebarOpened);
  }

  return (
    <>
      <div
        className={`fixed top-0 bg-backdrop left-0 w-[100%] z-40 p-5 h-[100%] ${
          sidebar ? "flex md:hidden" : "hidden"
        } flex-col`}
      ></div>
      <div
        className={`fixed top-0 bg-white right-0 w-[80%] md:w-[350px] shadow-lg shadow-neutral-400 z-50 p-5 h-[100%] duration-500 flex transition-all ease-out  ${
          sidebar ? "mr-0" : "mr-[-100%]"
        } flex-col`}
      >
        {children}
        <svg
          className="filter-icons ml-1 absolute top-15 right-10 cursor-pointer"
          data-slot="icon"
          fill="none"
          strokeWidth="2.2"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          onClick={handleCloseSidebar}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Sidebar;
