import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const anchor = "hover:text-green-500 md:hover:border-b-2 md:hover:border-white";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-screen  z-50 bg-black fixed">
      <div className="container text-white  flex  justify-between h-auto pt-10  ">
        {/* left */}
        <div className=" cursor-pointer mb-3">
          <a className="flex justify-center items-center gap-2" href="#hero">
            <span className="px-1">
              <img
                src="/images/logo_ai.jpeg"
                alt="logo"
                className="w-16 h-10  rounded-full "
              />
            </span>
            <span className="">
              <span className="text-purple-500">Med</span>
              <span className="text-white">Spark</span>
            </span>
          </a>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex md:hidden absolute right-8 top-[35px] cursor-pointer z-50"
        >
          {open ? (
            <IoCloseSharp color="white" size={40} />
          ) : (
            <GiHamburgerMenu color="white" size={40} />
          )}
        </div>
        {/*  */}
        <div className=" text-white ">
          <nav
            className={`${
              open ? "right-0" : "right-[-100%]"
            } w-[60%] md:w-auto h-screen md:h-auto px-5 md:px-0 
          pt-20 md:pt-0 absolute md:static  top-0 duration-500 ease-in text-white bg-black md:bg-transparent`}
          >
            <ul
              onClick={() => setOpen((prev) => !prev)}
              className=" flex flex-col md:flex-row justify-center pt-5 mt-20 md:pt-0  md:mt-0 items-center gap-4 "
            >
              <li className="">
                <a className={anchor} href="#hero">
                  Features
                </a>
              </li>
              <li className="">
                <a className={anchor} href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="">
                <a className={anchor} href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li className="">
                <a className={anchor} href="#download">
                  Download
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
