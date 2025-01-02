/* eslint-disable no-unused-vars */

import React from "react";
import { BiDish } from "react-icons/bi";
import { TiPhoneOutline } from "react-icons/ti";

export default function ReservationTable() {
  return (
    <div className="flex justify-center mt-20">
      <div className="w-full flex flex-wrap pb-10  bg-[url('src/Images/background1.jpg')] bg-center bg-cover bg-no-repeat">
        {/* left side */}
        <div className="ml-36 mt-20">
          <div className="flex">
            <BiDish className="text-sm text-yellow-500 mt-[3px]" />
            <p className="text-sm text-yellow-500 font-semibold ml-1">
              RESERVATION
            </p>
          </div>

          <div className="mt-5">
            <p className="text-white font-extrabold text-[2.5rem]">
              Need reservation?
              <br /> booking your table <br /> now
            </p>
          </div>

          <p className="text-yellow-500 text-sm mt-5">Order Online</p>
          <div className="mt-5">
            <button className="bg-green-600 text-white hover:bg-yellow-500 font-semibold flex p-4 rounded-md">
              <TiPhoneOutline className="text-xl mt-1" />{" "}
              <span>+91 9998654782</span>
            </button>
          </div>
        </div>

        {/* Right side */}

        <div className="mt-20 ml-36 bg-green-600 rounded-md p-4">
            <div className="flex justify-center">

          <p className="text-white font-bold text-2xl">BOOK A TABLE</p>
            </div>

          <div className="flex mt-5">
            <input
              type="text"
              required
              className="p-3 border-none bg-green-700 text-white font-bold rounded-md"
              placeholder="Enter Your Name "
            />
            <input
              type="email"
              required
              className="p-3 ml-5 border-none bg-green-700 text-white font-bold rounded-md"
              placeholder="Enter Your Email "
            />
          </div>

          <div className="flex mt-5">
            <input
              type="number"
              required
              className="p-3 border-none bg-green-700 text-white font-bold rounded-md"
              placeholder="Enter Your Number "
            />
            <input
              type="date"
              required
              className="p-3 ml-5 border-none w-full bg-green-700 text-white font-bold rounded-md"
              placeholder=" Date "
            />
          </div>

          <select
            name="People"
            className="p-3  w-full border-none mt-5 bg-green-700 text-white font-bold rounded-md"
            id=""
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <div className="mt-5">
            <button className="bg-yellow-500  font-bold hover:bg-red-600 hover:text-white text-xl w-full flex justify-center h-14 rounded-md items-center ">
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
