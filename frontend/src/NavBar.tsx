import CyberSphereLogo from "./assets/CSlogo.png";
import CartIcon from "./assets/cart.png";
import SearchIcon from "./assets/search-icon.png";
export default function NavBar() {
  return (
    <>
      <div className="font-roboto bg-darkbg fixed top-0 h-28 w-full text-2xl">
        <div className="justify-left flex h-3/5 items-center">
          <div className="ml-48 flex min-w-fit items-center justify-center">
            <div className="ml-20 flex min-w-48 items-center">
              <img src={CyberSphereLogo} className="h-12 w-12 "></img>
              <p className=" text-gray-100">CyberSphere</p>
            </div>
            <div className=" bg-line ml-12 h-10 w-0.5"></div>
            <a className=" text-lessgreyish ml-12 text-sm font-normal">Shop</a>
            <a className=" text-greyish ml-12 min-w-fit text-sm font-normal">
              My Orders
            </a>
            <a className=" text-greyish ml-12 text-sm font-normal">Support</a>
          </div>
          <div className="border-line bg-darkbg text-greyish ml-32 h-12 w-96 rounded-lg border-2 pl-4 text-sm focus:shadow-none focus:outline-none">
            <input
              type="search"
              placeholder="Search"
              className="bg-darkbg text-greyish h-full  w-full  border-none pl-4 text-sm 
            focus:shadow-none focus:outline-none "
            ></input>
          </div>
        </div>
        <div className=" bg-line mt-1.5 h-0.5"></div>
        <div className="flex h-2/5 items-center justify-center gap-24">
          <a className=" text-greyish  text-sm font-normal">Computers</a>
          <a className=" text-greyish  text-sm font-normal">Streaming</a>
          <a className=" text-greyish  text-sm font-normal">Components</a>
          <a className=" text-greyish  text-sm font-normal">Audio</a>
          <a className=" text-greyish  text-sm font-normal">Accesories</a>
        </div>
        <div className=" bg-line h-0.5"></div>
      </div>
    </>
  );
}
