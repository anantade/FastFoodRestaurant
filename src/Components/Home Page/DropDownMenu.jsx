/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'

export default function DropDownMenu({title,option1,option2,option3,option4}) {
  return (
    <div>
         <p
              className="px-3 py-2 text-lg bg-transparent text-white font-bold  hover:text-red-800 flex items-center cursor-pointer"
            >
              {title}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </p>

            {/* Dropdown Menu */}
            <div className="absolute left-0 hidden group-hover:block w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {option1}
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {option2}
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                 {option3}
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                 {option4}
                </a>
              </div>
            </div>
    </div>
  )
}
