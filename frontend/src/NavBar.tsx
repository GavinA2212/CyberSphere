import CyberSphereLogo from "./assets/CSlogo.png";
import CartIcon from "./assets/cart.png";
import SearchIcon from "./assets/search-icon.png";
import HamburgerIcon from "./assets/hamburger-icon.png";
export default function NavBar() {
  return (
    <>
      <div className="fixed top-0 h-28 w-full bg-darkbg font-roboto text-2xl">
        <div className="justify-left flex h-3/5 items-center ">
          <div className="flex w-2/12 min-w-fit  items-center justify-center  sm:hidden">
            <button>
              <img
                src={HamburgerIcon}
                className=" h-4  w-4 self-start sm:hidden "
              ></img>
            </button>
          </div>
          <div className=" xs:gap-1 xs:w-3/12 flex min-w-fit  items-center justify-end  sm:w-5/12 sm:gap-4 md:gap-9 ">
            <div className="flex min-w-fit items-center ">
              <img
                src={CyberSphereLogo}
                className="xs:h-8 xs:w-8 xs:ml-2 h-10 w-10 sm:ml-0 md:h-10 md:w-10"
              ></img>
              <p className="xs:text-base font-normal  text-gray-100 md:text-xl">
                CyberSphere
              </p>
            </div>

            <div className=" xs:hidden h-10 w-0.5 bg-line"></div>
            <a className="  xs:hidden text-xs font-normal  text-lessgreyish sm:inline-block ">
              Shop
            </a>
            <a className=" xs:hidden min-w-fit text-xs font-normal text-greyish sm:inline-block">
              My Orders
            </a>
            <a className=" xs:hidden text-xs font-normal  text-greyish sm:inline-block">
              Support
            </a>
          </div>
          <div className=" w-thirtyp ml-4 flex min-w-fit items-center justify-end ">
            <div
              className="xs:h-9 xs:text-xs xs: flex  max-w-80 flex-1 items-center justify-start rounded-lg
             border-2 border-line bg-darkbg pl-1 text-greyish focus:shadow-none focus:outline-none sm:h-11 sm:pl-4 sm:text-sm"
            >
              <input
                type="search"
                placeholder="Search"
                size={4}
                className="xs:pl-0 size h-full w-auto flex-1 border-none bg-darkbg text-sm text-greyish 
              focus:shadow-none focus:outline-none  md:pl-2"
              ></input>
              <button className=" mr-2.5 flex h-7 w-8  items-center justify-center  rounded-full  ">
                <img src={SearchIcon} className="h-3  w-3 "></img>
              </button>
            </div>
          </div>
          <div className="xs:gap-1 xs:ml-0 xs:justify-center flex w-48 min-w-fit items-center  sm:gap-5 md:ml-4 md:justify-end">
            <button>
              <img src={CartIcon} className="h-6  w-6 "></img>
            </button>
            <button className="bg-purp xs:h-8 xs:w-16 flex items-center justify-center rounded-full text-xs text-lessgreyish md:mr-4 md:h-10 md:w-20 lg:mr-0">
              Sign In
            </button>
          </div>
        </div>
        <div className=" h-0.5 bg-line"></div>
        <div className="xs:gap-4 flex h-2/5 items-center justify-center sm:gap-20">
          <a className=" text-xs  font-normal text-greyish">Computers</a>
          <a className=" text-xs  font-normal text-greyish">Streaming</a>
          <a className=" text-xs  font-normal text-greyish">Components</a>
          <a className=" text-xs  font-normal text-greyish">Audio</a>
          <a className=" text-xs  font-normal text-greyish">Accesories</a>
        </div>
        <div className=" h-0.5 bg-line"></div>
      </div>
    </>
  );
}
