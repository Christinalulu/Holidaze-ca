import { useState } from "react";

// IMPORT ICONS REACT

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoBedOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";

const Navigation = () => {
  const [open, setOpen] = useState(true);

  const menuItems = [
    {title: "Dashboard"},
    {title: "Browser"},
    {title: "Profile"},
    {title: "Contact"},
    {title: "Logout"},
    {title: "Sign in"},
    {title: "Log in"},

  ]

  return (
    <div
      className={` bg-purple-50 h-screen px-4 py-8 ${
        open ? "w-72" : "w-20"
      } duration-300 fixed`}>
      <AiOutlineArrowLeft
        className={` text-purple-500 text-3xl border border-purple-500  bg-white absolute -right-3 top-9 rounded-full ${
          !open && "rotate-180"
        } duration-200 `}
        onClick={() => setOpen(!open)}
      />
      <div className={`flex items-center ${!open && "scale-0"} duration-200 `}>
        <IoBedOutline className="text-purple-500  text-3xl  mr-2" />
        <h1 className=" text-2xl">Holidaze</h1>
      </div>

      <div
        className={`inline-flex justify-center rounded-md bg-white mt-6 ${
          !open ? "px-2.5" : "px-2"
        } py-2 `}>
        <AiOutlineSearch
          className={`text-purple-500 float-left text-3xl block ${
            open && "mr-2"
          } `}
        />
        <input
          type={"search"}
          placeholder="search"
          className={`focus:outline-none bg-transparent w-full ${
            !open && "hidden"
          }`}
        />
      </div>

      <ul className="pt-2 ">
        {menuItems.map((menu, index)=> (
          <>
          <li key={index} className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md  mt-4`}>
            <span className="text-2xl  text-purple-500"><RxDashboard/></span>
            <span className={`text-base font-medium flex-1 duration-150  ${!open && "hidden"}`} >{menu.title}</span>
  

          </li>
       
          
          </>
        ))}
      </ul>
     
            <div className=" bg-white flex items-center  p-4 absolute bottom-0 w-full left-0"  >
              <div className={`flex items-center   font-semibold text-md ${!open && "hidden"}`}>
              <img className="h-8 w-8 rounded-full  bg-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Your self"/>
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>

              </div>
             
              <div> <HiOutlineLogout className={`text-2xl text-purple-500 absolute top-5 right-8 ${!open && "inline-block"} `} /></div>
             
            </div>
    </div>
  );
};

export default Navigation;
