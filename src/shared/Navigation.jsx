import { useState } from "react";


// IMPORT ICONS REACT
import { FaArrowLeft } from "react-icons/fa";
import {IoBedOutline} from "react-icons/io5"
import {GoSearch} from "react-icons/go"

const Navigation = () => {
  const [open, setOpen] = useState(true);

  // Naviagtions

  const Navigations = [
    
  ]

  return (
    <div>
        {/* Open and closing menu */}
      <div
        className={`bg-slate-100 h-screen p-6 pt-8 ${open ? "w-64" : "w-20" } duration-300 relative`}>

         {/* Icon arrow */}
        <div className="text-purple-400 top-10 rounded-full absolute bg-white -right-4 border-purple-400 border cursor-pointer hover:bg-purple-500 hover:text-white">
          <FaArrowLeft
            className={` text-sm m-2 ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

          {/* Home Title */}

        </div>
        <div className="inline-flex items-center "> <IoBedOutline className={` text-2xl text-purple-500 mr-2 ${!open && "hover:scale-125"} duration-200`}/> 
        <h1 className={`${!open && "scale-0"} duration-300`}>Holidaze</h1> 
        </div>

        <div className={`flex items-center rounded-md bg-white mt-6 ${!open ? "px-2.5": "px-4"} py-2 `}>
        
         <GoSearch className= { ` text-purple-500 block float-left cursor-pointer text-lg ${open && "mr-2"} `}/>
            <input type="search" placeholder="search" className= {` text-base bg-transparent w-full focus:outline-none ${!open && "hidden"}`} />
       
        </div>

        <ul className="p-7">
          {Navigations.map((menu, index) =>(
            <>
            <li key={index}>
              <span>{menu.title}</span>

            </li>
            
            </>


          ))}

        </ul>


      </div>
    </div>
  );
};

export default Navigation;
