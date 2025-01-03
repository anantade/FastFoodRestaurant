/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";

export default function MenuCardDelicious({ title, subtitle, price, image }) {
  return (
    <div>
      <div className="bg-gray-100 border border-dotted flex p-2 group hover:bg-green-600  justify-center items-center">
        {/* image */}
        <img className="" src={image} alt="" />

        <div className="ml-5">
          <p className="text-xl font-semibold group-hover:text-white">
            {title}
          </p>
          <p className="text-sm text-gray-500 font-semibold group-hover:text-white">
            {subtitle}
          </p>
        </div>

        <div className="ml-20">
          <p className="text-red-700 text-xl font-bold group-hover:text-white">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
}
