/* eslint-disable no-unused-vars */

import React from "react";
import { BiDish } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { FaHandHoldingWater } from "react-icons/fa";
import { PiChefHatLight } from "react-icons/pi";
import { GiPartyPopper } from "react-icons/gi";

export default function WhyChoose() {
  return (
    <div className="flex justify-center mt-20">
      <div>
        <div className="flex justify-center">
          <BiDish className="text-sm text-yellow-600 mt-[3px]" />
          <p className="text-sm text-yellow-600 font-semibold ml-1">
            WHY CHOOSE US
          </p>
        </div>

        <div className="mt-2 flex justify-center">
            <p className="text-[2.5rem] font-extrabold">WHY WE ARE YOUR BEST CHOICE</p>
        </div>

        {/* Card */}

        <div className="flex justify-center mt-5">
             {/* first card */}
            <div className="bg-gray-200 hover:bg-red-600 hover:text-white rounded-md p-5 group">
                <div className="flex justify-center">

            <IoFastFood className="text-red-500 text-[5rem] group-hover:text-white" />
                </div>
                 <div className="flex justify-center">

                <p className="font-bold text-2xl mt-4">Hygienic Food</p>
                 </div>
                <p className=" text-lg text-gray-500 group-hover:text-white">We are passionate about</p>
                <p className=" text-lg ml-2 text-gray-500 group-hover:text-white">serving fresh, flavorful</p>
            </div>
             
             {/* second card */}
            <div className="bg-gray-200 ml-8 hover:bg-red-600 hover:text-white rounded-md p-5 group">
                <div className="flex justify-center">

            <FaHandHoldingWater  className="text-red-500 text-[5rem] group-hover:text-white" />
                </div>
                 <div className="flex justify-center">

                <p className="font-bold text-2xl mt-4">Fresh Environment</p>
                 </div>
                <p className=" text-lg text-gray-500 ml-2 group-hover:text-white">We are passionate about</p>
                <p className=" text-lg ml-4 text-gray-500 group-hover:text-white">serving fresh, flavorful</p>
            </div>

             {/* third card */}
            <div className="bg-gray-200 ml-8 hover:bg-red-600 hover:text-white rounded-md p-5 group">
                <div className="flex justify-center">

            <PiChefHatLight   className="text-red-500 text-[5rem] group-hover:text-white" />
                </div>
                 <div className="flex justify-center">

                <p className="font-bold text-2xl mt-4">Skilled Chefs</p>
                 </div>
                <p className=" text-lg text-gray-500 group-hover:text-white">We are passionate about</p>
                <p className=" text-lg ml-2 text-gray-500 group-hover:text-white">serving fresh, flavorful</p>
            </div>

             {/* fourth card */}
            <div className="bg-gray-200 ml-8 hover:bg-red-600 hover:text-white rounded-md p-5 group">
                <div className="flex justify-center">

            <GiPartyPopper   className="text-red-500 text-[5rem] group-hover:text-white" />
                </div>
                 <div className="flex justify-center">

                <p className="font-bold text-2xl mt-4">Event & Party</p>
                 </div>
                <p className=" text-lg text-gray-500 group-hover:text-white">We are passionate about</p>
                <p className=" text-lg ml-2 text-gray-500 group-hover:text-white">serving fresh, flavorful</p>
            </div>
        </div>
      </div>
    </div>
  );
}
