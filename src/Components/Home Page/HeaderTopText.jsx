/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeaderTopText() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
      }, []);
  return (
    <div className=''>
        <div className='flex flex-wrap mt-36 ml-20'>
            {/* left side */}
           <div data-aos="fade-right">
              <p className='text-yellow-500 font-bold text-lg'>HOT FOR EVERY SUNDAY</p>
              <div className=''>
                <p className='text-white font-bold text-[5.5rem]'>Enjoy our</p>
              </div>
              <div className=''>
                <p className='text-white font-bold  text-[5.5rem]'><span className='text-red-700'>Delicius</span> food</p>
              </div>
              <div className=''>
                <p className='text-white font-bold  text-lg'>Savor the taste of our delicious, expertly crafted dishes <br /> made with the finest ingredients, offering a perfect blend of <br /> flavors.</p>
              </div>
              <div className='mt-6'>
                <button className="text-white pt-4 pb-4 pl-8 pr-8 font-bold bg-red-700 text-lg rounded-md hover:bg-green-600">Order Now</button>
              </div>
           </div>
           
            {/* right side */}
           <div className='ml-10 ' data-aos="fade-left">
            <div className='flex relative'>

            
              <div className='absolute  -rotate-45 '>
                 <img src="src\Images\text-03.png" className=' ' alt="" />
              </div>

              <div className='ml-8'>
              <img src="src\Images\hero-four_img1.png" className=' w-[35rem] ' alt="" />
              </div>
              </div>
           </div>
        </div>
    </div>
  )
}
