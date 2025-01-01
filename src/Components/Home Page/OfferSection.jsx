/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { BiDish } from "react-icons/bi";

export default function OfferSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date().setHours(24, 0, 0, 0); // Set the countdown to midnight

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mt-20 flex justify-center">
      <div className="w-full pb-10  bg-[url('src/Images/background1.jpg')] bg-center bg-cover bg-no-repeat">
        <div className=" ml-24 flex">
          {/* left part */}
          <div className="mt-44">
            <div className="flex">
              <BiDish className="text-sm text-yellow-500 mt-[3px]" />
              <p className="text-sm text-yellow-500 font-semibold ml-1">
                GET 25% DISCOUNT
              </p>
            </div>

            <div>
              <p className="font-bold text-white text-[2.5rem]">
                Today Our Special <br /> Combo Offers
              </p>
            </div>

            <div className="mt-5">
              <div className="flex space-x-4 mt-4">
                {Object.entries(timeLeft).map(([unit, value], index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center w-20 p-2 bg-transperant rounded-lg"
                  >
                    <p className="text-3xl text-white font-bold">{value}</p>
                    <p className="uppercase text-sm text-white">{unit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <button className="text-white pt-4 pb-4 pl-8 pr-8 font-bold bg-red-700 text-lg rounded-md hover:bg-green-600">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Right part */}

          <div>
            <div className="md:ml-[48rem]">
              <img className="md:w-48 " src="src\Images\bn-img-6.png" alt="" />
            </div>

            <div className="md:ml-48">
              <img src="src\Images\offer-img1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
