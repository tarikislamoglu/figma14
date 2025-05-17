import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareTwitter,
} from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
const App = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center bg-[#FFDD55]">
      <header className="absolute top-0  w-full bg-black flex justify-between items-center py-3 px-5 ">
        <div className="w-[68px] h-[68px] relative bg-black">
          <div className="bg-[#FFDD55] rounded-full w-[64px] h-[64px] z-2 absolute top-0 left-0 border-2 border-black flex justify-center items-center">
            <p className="font-extrabold text-[40px]">A</p>
          </div>
          <div className="bg-white rounded-full w-[64px] h-[64px] z-1 absolute bottom-0 right-0"></div>
        </div>
        <nav className=" text-white  sm:w-1/2 font-bold ">
          <div className="sm:flex justify-around hidden">
            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Contact Us</a>

            <a href="#">Team</a>
          </div>
          <div className="flex justify-end sm:hidden">
            {" "}
            <GiHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>

      <main className=" w-full h-full  flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 px-10 py-25">
        <div className="w-full md:w-1/2 space-y-5">
          <div className="w-full flex flex-col space-y-5  ">
            <h2 className="font-bold text-[70px] md:text-[90px] ">Hello,I'm</h2>
            <p className="text-[#474A57] ">UI/UX Designer , React developer</p>
          </div>

          <div className=" w-full  flex space-x-5  items-baseline ">
            <div className="bg-[#00C6AE] rounded-xl relative w-[150px] h-[50px]">
              <button className="absolute top-[-3px] left-[-3px] bg-black text-white font-bold rounded-xl w-[150px] h-[50px]">
                Hire me
              </button>
            </div>
            <div className="bg-[#00C6AE] rounded-xl relative w-[150px] h-[50px]  ">
              <button className="absolute top-[-3px] left-[-3px] bg-black text-white font-bold rounded-xl w-[150px] h-[50px]">
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex md:space-x-3 ">
          <img src="/avatar.png" className="w-4/5 h-auto max-h-[500px]" />
          <div className="flex flex-col w-1/5 justify-end space-y-2">
            <a
              href=""
              className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center"
            >
              <FaSquareInstagram className="text-4xl" />
            </a>
            <a
              href=""
              className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center"
            >
              <FaSquareFacebook className="text-4xl" />
            </a>
            <a
              href=""
              className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center"
            >
              <FaSquareTwitter className="text-4xl" />
            </a>
            <a
              href=""
              className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center"
            >
              <FaYoutubeSquare className="text-4xl " />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
