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
    <div className="relative min-h-screen w-full  bg-[#FFDD55] ">
      <header className="absolute top-0  w-full bg-black flex justify-between items-center py-3 px-5 rounded-b-2xl">
        <div className="w-[68px] h-[68px] relative bg-black">
          <div className="bg-[#FFDD55] rounded-full w-[64px] h-[64px] z-2 absolute top-0 left-0 border-2 border-black flex justify-center items-center">
            <p className="font-extrabold text-[40px]">A</p>
          </div>
          <div className="bg-white rounded-full w-[64px] h-[64px] z-1 absolute bottom-0 right-0"></div>
        </div>
        <nav className=" text-white  sm:w-1/2 font-bold ">
          <ul className="sm:flex justify-around hidden">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
          </ul>
          <div className="flex justify-end sm:hidden">
            <GiHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      <main className="flex flex-col items-center space-y-30">
        <section className=" w-full h-full  flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 px-10 pt-30 ">
          <div className="w-full md:w-1/2 space-y-5">
            <div className="w-full flex flex-col space-y-5  ">
              <h2 className="font-bold text-[70px] md:text-[90px] ">
                Hello,I'm
              </h2>
              <p className="text-[#474A57] ">
                UI/UX Designer , React developer
              </p>
            </div>

            <div className=" w-full  flex space-x-5  items-baseline ">
              <div className="bg-[#00C6AE] rounded-xl relative w-[150px] h-[50px] hover:bg-black">
                <button className="absolute top-[-3px] left-[-3px] bg-black text-white font-bold rounded-xl w-[150px] h-[50px] hover:bg-[#00C6AE] cursor-pointer">
                  Hire me
                </button>
              </div>
              <div className="bg-[#00C6AE] rounded-xl relative w-[150px] h-[50px] hover:bg-black  ">
                <button className="absolute top-[-3px] left-[-3px] bg-black text-white font-bold rounded-xl w-[150px] h-[50px] hover:bg-[#00C6AE] cursor-pointer">
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
        </section>

        <section className="p-10  h-auto bg-[#106EE8] flex text-white rounded-lg space-x-5 mx-10 ">
          <img src="/avatar.png" className="w-1/3" />
          <div className="w-2/3 space-y-3 flex flex-col justify-center items-start">
            <h3 className="font-bold text-3xl">About Me</h3>
            <div>
              <h5 className="text-[#FFDD55] font-bold">UI/UX Designer</h5>
              <h5 className="text-[#FFDD55] font-bold">React Developer</h5>
            </div>

            <p>
              Hello! I'm a UI/UX designer and React developer. Dive into my
              portfolio to discover a fusion of elegant design and seamless
              react development. Welcome to a world where creativity meets
              functionality!
            </p>
            <div className=" w-full flex flex-col space-y-3 sm:flex-row sm:space-x-5  sm:items-baseline ">
              <div className="bg-[#00C6AE] rounded-xl relative w-[150px] h-[50px] hover:bg-black">
                <button className="absolute top-[-3px] left-[-3px] bg-black text-white font-bold rounded-xl w-[150px] h-[50px] hover:bg-[#00C6AE] cursor-pointer">
                  Hire me
                </button>
              </div>
              <div className="bg-[#00C6AE] rounded-xl relative w-[150px] h-[50px] hover:bg-black ">
                <button className="absolute top-[-3px] left-[-3px] bg-black text-white font-bold rounded-xl w-[150px] h-[50px] hover:bg-[#00C6AE] cursor-pointer">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full h-auto bg-[#EB7711] flex flex-col text-white  items-center p-15 space-y-8">
          <h3 className="font-bold text-3xl text-black">Services</h3>
          <p className="text-center">
            Embark on a journey of digital transformation with services that
            blend design brilliance with cutting-edge development. Let's create
            experiences that resonate and applications that captivate.
          </p>
          <div className="flex h-1/2 w-full space-x-5">
            <div>
              <div className=" bg-[#A259FF] rounded-lg border-2 border-black p-5 space-y-3 relative h-full flex flex-col justify-between ">
                <div className="rounded-full w-[50px] h-[50px] bg-[#0ACF83] flex justify-center items-center absolute top-[-25px] left-[50%] ">
                  <p className="font-bold text-[40px] ">1</p>
                </div>
                <h4 className="font-bold">UI/UX Designer</h4>
                <p>
                  Crafting captivating interfaces that resonate. From wireframes
                  to polished designs, I make sure your digital presence stands
                  out with user-centric creativity.
                </p>
                <button className="w-full p-2 bg-[#FFDD55] text-black rounded-lg hover:bg-[#0ACF83] hover:text-white cursor-pointer font-bold">
                  Learn More
                </button>
              </div>
            </div>
            <div>
              <div className=" bg-[#A259FF] rounded-lg border-2 border-black p-5 space-y-3 relative h-full">
                <div className="rounded-full w-[50px] h-[50px] bg-[#0ACF83] flex justify-center items-center absolute top-[-25px] left-[50%]">
                  <p className="font-bold text-[40px] ">2</p>
                </div>
                <h4 className="font-bold">React Developer</h4>
                <p>
                  Turning app ideas into reality. As a React developer, I build
                  sleek, cross-platform applications for a seamless user
                  experience and efficient performance.{" "}
                </p>
                <button className="w-full p-2 bg-[#FFDD55] text-black rounded-lg hover:bg-[#0ACF83] hover:text-white cursor-pointer font-bold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center w-full min-h-[250px] bg-[#0ACF83]  space-y-5">
          <p className="text-white font-bold">
            If You have any Query or Project ideas feel free to{" "}
          </p>
          <button className="p-2 w-1/3 rounded-lg  text-black bg-[#FFDD55] shadow-md shadow-black hover:bg-[#A259FF] font-bold text-[30px] cursor-pointer">
            Contact me
          </button>
        </section>
      </main>

      <footer className="flex flex-col items-center px-10 space-y-10 pt-30 pb-10">
        <div className="flex items-center space-x-5">
          <div className="w-[68px] h-[68px] relative">
            <div className="bg-[#FFDD55] rounded-full w-[64px] h-[64px] z-2 absolute top-0 left-0 border-2 border-black flex justify-center items-center">
              <p className="font-extrabold text-[40px]">A</p>
            </div>
            <div className="bg-white rounded-full w-[64px] h-[64px] z-1 absolute bottom-0 right-0"></div>
          </div>
          <h3 className="font-bold text-[30px]">Namık Korona</h3>
        </div>

        <p className="text-center max-w-2/3 font-bold">
          I Make as soon as Possible .You really like my work contact me and
          let’s Work Together.
        </p>
        <div className="flex justify-center space-x-2">
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
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full md:space-y-0 space-y-2">
          <p>Türkiye</p>
          <p>© 2024, All Rights By Figma Design.</p>
          <div className="flex space-x-2">
            <a href="">Guides</a>
            <a href="">Terms of Use</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
