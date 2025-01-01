export default function HeaderTopText() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-wrap md:mt-36 md:ml-20">
        {/* Left side */}
        <div className="animate-slide-in-left">
          <p className="text-yellow-500 font-bold text-lg">HOT FOR EVERY SUNDAY</p>
          <div className="">
            <p className="text-white font-bold text-[4rem]">Enjoy our</p>
          </div>
          <div className="">
            <p className="text-white font-bold text-[4rem]">
              <span className="text-red-700">Delicious</span> food
            </p>
          </div>
          <div className="">
            <p className="text-white font-bold text-lg">
              Savor the taste of our delicious, expertly crafted dishes <br />
              made with the finest ingredients, offering a perfect blend of <br />
              flavors.
            </p>
          </div>
          <div className="mt-6">
            <button className="text-white pt-4 pb-4 pl-8 pr-8 font-bold bg-red-700 text-lg rounded-md hover:bg-green-600">
              Order Now
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="ml-14 animate-slide-in-right">
          <div className="flex relative">
            <div className="absolute -rotate-45">
              <img src="src/Images/text-03.png" className="" alt="" />
            </div>
            <div className="ml-8">
              <img src="src/Images/hero-four_img1.png" className="w-[32rem]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
