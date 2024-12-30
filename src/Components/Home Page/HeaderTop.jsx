/* eslint-disable no-unused-vars */

import React from "react";
import DropDownMenu from "./DropDownMenu";
import { FaCartArrowDown } from "react-icons/fa";
import HeaderTopText from "./HeaderTopText";


export default function HeaderTop() {
  return (
    <div className="relative flex h-screen justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-[50rem] object-cover"
        src="\src\Video\animated video.mp4"
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-[50rem] bg-black/90">
      </div>

      {/* Content Over Video */}
      <div className="relative z-10">
      
        {/* Navbar */}
        <div className="mt-8 ml-14 flex items-center">
          {/* Logo */}
          <div className="md:w-[9rem]">
            <img className="w-[9rem]" src="src\Images\logo-white.png" alt="Logo" />
          </div>

          {/* Navbar Links */}
          <div className="ml-36 flex relative group">
            {/* Home Link */}
            <DropDownMenu
              title="Home"
              option1="Home Restaurant"
              option2="Home Burger"
              option3="Home Pizza"
              option4="Home Sushi"
            />
          </div>

          <div className="ml-10 relative group">
            <DropDownMenu
              title="Menu"
              option1="Menu List one"
              option2="Menu List two"
              option3="Menu Grid"
              option4="Menu Details"
            />
          </div>

          <div className="ml-10 relative group">
            <DropDownMenu
              title="Shops"
              option1="Menu List one"
              option2="Menu List two"
              option3="Menu Grid"
              option4="Menu Details"
            />
          </div>
          <div className="ml-10 relative group">
            <DropDownMenu
              title="Blog"
              option1="Blog Grid"
              option2="Blog Standard"
              option3="Blog Details"
            />
          </div>
             <div>
                <p className=" ml-10 px-3 py-2 text-lg bg-transparent text-white font-bold  hover:text-red-800 flex items-center cursor-pointer ">Contact Us</p>
             </div>
          <div className="ml-14">
            <button className="text-white pt-4 pb-4 pl-8 pr-8 font-bold bg-red-700 text-lg rounded-md hover:bg-green-600">Book A Table</button>
          </div>
            <div className="ml-10">
              <button className="p-5 bg-green-600 rounded-md"><FaCartArrowDown className="text-white" /></button>
            </div>
        </div>
        <div>

       <HeaderTopText/>
        </div>
      </div>
    </div>
  );
}
