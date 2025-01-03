/* eslint-disable no-unused-vars */

import React from "react";
import { BiDish } from "react-icons/bi";
import MenuCardDelicious from "./MenuCardDelicious";

export default function DeliciousMenu() {
  return (
    <div className="flex justify-center mt-20">
      <div>
        {/* top part */}
        <div className="flex justify-center">
          <BiDish className="text-sm text-yellow-600 mt-[3px]" />
          <p className="text-sm text-yellow-600 font-semibold ml-1">
            DELICIOUS MENU
          </p>
        </div>

        <div className="mt-2 flex justify-center">
          <p className="text-[2.5rem] font-extrabold ">
            Explore Our Delicious Menu
          </p>
        </div>

        {/* middle part */}

        <div className="mt-5 flex flex-wrap">
          {/* left part */}
          <div>
            <MenuCardDelicious
              title="Truffle Mac and Cheese"
              subtitle="Indulgent mac and cheese with truffle essence."
              price="25.5"
              image="src\Images\menu-thumb1.png"
            />

            <div className="mt-5">
            <MenuCardDelicious
              title="Honey-Glazed Salmon"
              subtitle="Sweet and savory honey-glazed salmon fillet."
              price="25.5"
              image="src\Images\menu-thumb3.png"
            />
            </div>
            <div className="mt-5">
            <MenuCardDelicious
              title="Gourmet Mushroom Risotto"
              subtitle="Rich, creamy risotto with gourmet mushrooms"
              price="25.5"
              image="src\Images\menu-thumb5.png"
            />
            </div>
          </div>

          {/* right part */}
          <div>
          <div className="ml-5">
            <MenuCardDelicious
              title="Grilled Ribeye Steak"
              subtitle="Perfectly grilled ribeye steak with savory seasoning."
              price="25.5"
              image="src\Images\menu-thumb2.png"
            />
            </div>
          <div className="ml-5 mt-5">
            <MenuCardDelicious
              title="Thai Coconut Curry"
              subtitle="Fragrant Thai coconut curry with vibrant vegetables."
              price="25.5"
              image="src\Images\menu-thumb4.png"
            />
            </div>
          <div className="ml-5 mt-5">
            <MenuCardDelicious
              title="Margarita Shrimp Tacos"
              subtitle="Zesty shrimp tacos with fresh margarita flavor.....!"
              price="25.5"
              image="src\Images\menu-thumb8.png"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
