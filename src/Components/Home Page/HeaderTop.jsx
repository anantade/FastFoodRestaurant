/* eslint-disable no-unused-vars */

import React from "react";
import DropDownMenu from "./DropDownMenu";

export default function HeaderTop() {
  return (
    <div className="relative flex h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="\src\Video\animated video.mp4"
        autoPlay
        loop
        muted
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/90"></div>

      {/* Content Over Video */}
      <div className="relative z-10">
        {/* Navbar */}
        <div className="mt-8 ml-14 flex items-center">
          {/* Logo */}
          <div>
            <img src="src\Images\logo-white.png" alt="Logo" />
          </div>

          {/* Navbar Links */}
          <div className="ml-10 flex relative group">
            {/* Home Link */}
           <DropDownMenu title="Home" option1="Home Restaurant" option2="Home Burger" option3="Home Pizza" option4="Home Sushi" />

          </div>

           <div className="ml-10 relative group">
            
           <DropDownMenu title="Menu" option1="Menu List one" option2="Menu List two" option3="Menu Grid" option4="Menu Details" />
           </div>

           <div className="ml-10 relative group">
            
           <DropDownMenu title="Shops" option1="Menu List one" option2="Menu List two" option3="Menu Grid" option4="Menu Details" />
           </div>
        </div>
      </div>
    </div>
  );
}
