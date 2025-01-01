/* eslint-disable no-unused-vars */
import React from "react";
import { CiBurger } from "react-icons/ci";
import { LuSandwich } from "react-icons/lu";
import { BiDish } from "react-icons/bi";

export default function HeaderBottom() {
  return (
    <div className="mt-48 ">
      <div>
        {/* top part */}
        <div className="flex justify-center">
          <div>
            <p className="text-[2.5rem] font-extrabold">OUR CATEGORIES</p>
          </div>

          <div className="flex justify-end w-[60%]">
            <button className="pl-7 pr-7 pt-3 pb-3 border font-semibold border-red-700 rounded-md hover:bg-green-500 hover:text-white hover:border-black">
              See More
            </button>
          </div>
        </div>

        {/* second part */}

        <div className="flex flex-wrap mt-10 justify-center">
          {/* First Div */}
          <div className="flex bg-gray-200 hover:bg-red-600 hover:text-white p-8 rounded-md">
            <div className="bg-white rounded-full flex justify-center p-2 items-center ">
              {/* icon */}
              <CiBurger className="text-3xl text-black" />
            </div>

            <div className="ml-3">
              {/* text */}
              <p className="text-lg font-bold ">Delish Burger</p>
              <p className="text-sm text-gray-400 ">25 items</p>
            </div>
          </div>

          {/* Second Div */}
          <div className="flex bg-gray-200 hover:bg-red-600 hover:text-white p-8 rounded-md ml-14">
            <div className="bg-white rounded-full flex justify-center p-2 items-center ">
              {/* icon */}
              <LuSandwich className="text-3xl text-black" />
            </div>

            <div className="ml-3">
              {/* text */}
              <p className="text-lg font-bold ">Sandwiches</p>
              <p className="text-sm text-gray-400 ">20 items</p>
            </div>
          </div>

          {/* Third Div */}
          <div className="flex bg-gray-200 hover:bg-red-600 hover:text-white p-8 rounded-md ml-14">
            <div className="bg-white rounded-full flex justify-center p-2 items-center ">
              {/* icon */}
              <BiDish className="text-3xl text-black" />
            </div>

            <div className="ml-3">
              {/* text */}
              <p className="text-lg font-bold ">Mexican Cuisine</p>
              <p className="text-sm text-gray-400 ">20 items</p>
            </div>
          </div>

          {/* Forth Div */}
          <div className="flex bg-gray-200 hover:bg-red-600 hover:text-white p-8 rounded-md ml-14">
            <div className="bg-white rounded-full flex justify-center p-2 items-center ">
              {/* icon */}
              <BiDish className="text-3xl text-black" />
            </div>

            <div className="ml-3">
              {/* text */}
              <p className="text-lg font-bold ">Italian Cuisine</p>
              <p className="text-sm text-gray-400 ">20 items</p>
            </div>
          </div>
        </div>

        {/* last part */}

        <div className="mt-20 flex flex-wrap justify-center">
          {/* left side */}
          <div>
            <img src="src\Images\about-6.png" alt="" />
          </div>

          {/* Right side */}
          <div className="ml-5">
            <div className="flex">
              <BiDish className="text-sm text-yellow-500 mt-[3px]" />
              <p className="text-sm text-yellow-500 font-semibold ml-1">
                About Us
              </p>
            </div>

            <div>
              <p className="text-[2.5rem] font-extrabold">
                Delicia&#39;s about fresh <br /> flavorful dining
              </p>
              <p className="text-gray-500 mt-3">
                We are passionate about serving fresh, flavorful dishes crafted
                with the finest <br /> ingredients. Every meal is thoughtfully
                prepared to deliver a memorable dining <br /> experience
                you&#39;ll love.
              </p>
            </div>

            <div className="flex mt-5">
              <div className="flex bg-gray-200 hover:bg-red-600 hover:text-white p-5 rounded-md">
                <div className="bg-white rounded-full flex justify-center p-2 items-center ">
                  {/* icon */}
                  <img
                    src="src\Images\icon-7.svg"
                    className="text-3xl text-black"
                  />
                </div>

                <div className="ml-3">
                  {/* text */}
                  <p className="text-lg font-bold ">1500+</p>
                  <p className="text-sm text-gray-400 ">Total food items</p>
                </div>
              </div>

              <div className="flex bg-gray-200 hover:bg-red-600 hover:text-white p-5 ml-10 rounded-md">
                <div className="bg-white rounded-full flex justify-center p-2 items-center ">
                  {/* icon */}
                  <img
                    src="src\Images\icon-8.svg"
                    className="text-3xl text-black"
                  />
                </div>

                <div className="ml-3">
                  {/* text */}
                  <p className="text-lg font-bold ">500+</p>
                  <p className="text-sm text-gray-400 ">Branch Offices</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <button className="text-white pt-4 pb-4 pl-8 pr-8 font-bold bg-red-700 text-lg rounded-md hover:bg-green-600">
                Read more
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
