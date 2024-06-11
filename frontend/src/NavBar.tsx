import CyberSphereLogo from "./assets/CSlogo.png";
import CartIcon from "./assets/cart.png";
import SearchIcon from "./assets/search-icon.png";
import HamburgerIcon from "./assets/hamburger-icon.png";
import xicon from "./assets/xicon.png";
import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 h-28 w-full bg-darkbg font-DMSans text-2xl">
        <div className="justify-left flex h-3/5 items-center ">
          <div className="flex w-2/12 min-w-fit  items-center justify-center  sm:hidden">
            <button
              onClick={handleMobileMenuClick}
              className="flex size-7 items-center justify-center self-start  rounded-full transition  hover:bg-greyhover active:bg-greyclick sm:hidden"
            >
              <img src={HamburgerIcon} className=" h-4  w-4 "></img>
            </button>
          </div>

          {/*mobile menu*/}
          <div
            id="mobile-menu"
            className={`fixed top-0 flex h-1/3 w-1/2 flex-col  items-center justify-start rounded-lg border-2  border-line  bg-darkbglighter transition-all duration-500 ease-in-out
            
            ${isMobileMenuOpen ? "-left-0" : "-left-1/2"}`}
          >
            <button className="flex h-20 w-full items-center justify-center text-sm font-semibold text-lessgreyish transition hover:cursor-pointer hover:text-lessgreyish">
              Shop
            </button>
            <div className=" h-0.5 w-full  bg-zinc-800"></div>
            <button className="flex h-20 w-full items-center justify-center text-sm font-semibold text-greyish transition hover:cursor-pointer hover:text-lessgreyish">
              My Orders
            </button>
            <div className="  h-0.5 w-full bg-zinc-800"></div>
            <button className="flex h-20 w-full items-center justify-center text-sm font-semibold text-greyish transition hover:cursor-pointer hover:text-lessgreyish">
              Support
            </button>
            <button
              onClick={handleMobileMenuClick}
              className=" absolute right-2 top-2 flex size-6  items-center justify-center  "
            >
              <img src={xicon} className="size-4"></img>
            </button>
          </div>

          <div className=" flex min-w-fit items-center justify-end  xs:w-3/12 xs:gap-1  sm:w-5/12 sm:gap-4 md:gap-9 ">
            <div className="flex min-w-fit items-center ">
              <img
                src={CyberSphereLogo}
                className="h-10 w-10 xs:ml-2 xs:h-8 xs:w-8 sm:ml-0 md:h-10 md:w-10"
              ></img>
              <p className="font-normal text-gray-100 hover:cursor-pointer xs:text-base md:text-xl">
                CyberSphere
              </p>
            </div>

            <div className=" h-10 w-0.5 bg-line xs:hidden sm:inline-block"></div>
            <a className="  text-xs font-normal text-lessgreyish transition hover:cursor-pointer hover:text-lessgreyish xs:hidden sm:inline-block ">
              Shop
            </a>
            <a className=" min-w-fit text-xs font-normal text-greyish transition  hover:cursor-pointer hover:text-lessgreyish xs:hidden sm:inline-block">
              My Orders
            </a>
            <a className=" text-xs font-normal text-greyish transition hover:cursor-pointer hover:text-lessgreyish xs:hidden sm:inline-block">
              Support
            </a>
          </div>
          <div className=" ml-4 flex w-thirtyp min-w-fit items-center justify-end ">
            <div
              className="xs: flex max-w-80 flex-1  items-center justify-start rounded-lg border-2 border-line
             bg-darkbg pl-1 text-greyish focus:shadow-none focus:outline-none xs:h-9 xs:text-xs sm:h-11 sm:pl-4 sm:text-sm"
            >
              <input
                type="search"
                placeholder="Search"
                size={4}
                className="size h-full w-auto flex-1 border-none bg-darkbg text-sm text-greyish focus:shadow-none 
              focus:outline-none xs:pl-0  md:pl-2"
              ></input>
              <button className=" mr-2.5 flex h-7 w-7 items-center  justify-center rounded-full  transition hover:bg-greyhover active:bg-greyclick ">
                <img src={SearchIcon} className="h-3  w-3 "></img>
              </button>
            </div>
          </div>
          <div className="flex w-48 min-w-fit items-center xs:ml-0 xs:justify-center xs:gap-0  sm:gap-5 md:ml-4 md:justify-end">
            <button className="flex h-9  w-9 items-center  justify-center rounded-full  transition hover:bg-greyhover active:bg-greyclick">
              <img src={CartIcon} className="h-6  w-6 "></img>
            </button>
            <button className="flex items-center justify-center rounded-full bg-purp text-xs text-lessgreyish transition hover:bg-purphover active:bg-purpclick xs:h-8 xs:w-16 md:mr-4 md:h-10 md:w-20 lg:mr-0">
              Sign In
            </button>
          </div>
        </div>
        <div className="  -mb-0.5 h-0.5 bg-line"></div>
        <div className="flex h-2/5 items-center justify-center xs:gap-4 sm:gap-20">
          <a className=" text-xs  font-normal text-greyish transition hover:cursor-pointer hover:text-lessgreyish">
            Computers
          </a>
          <a className=" text-xs  font-normal text-greyish transition hover:cursor-pointer hover:text-lessgreyish">
            Streaming
          </a>
          <a className=" text-xs  font-normal text-greyish transition hover:cursor-pointer hover:text-lessgreyish">
            Components
          </a>
          <a className=" text-xs  font-normal text-greyish transition hover:cursor-pointer hover:text-lessgreyish">
            Audio
          </a>
          <a className=" text-xs  font-normal text-greyish transition hover:cursor-pointer hover:text-lessgreyish active:text-white">
            Accesories
          </a>
        </div>
        <div className=" h-0.5 bg-line"></div>
      </div>
    </>
  );
}
