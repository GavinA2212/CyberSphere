import bgplaceholder from "../assets/bg-line.png";

export default function FeaturedProduct() {
  return (
    <>
      <div className="twol:flex-row  w-ft twol:items-center flex flex-col gap-0.5  rounded-sm border-red-500">
        <div className="max-w-33 max-h-33 flex  ">
          <img className="size-fit rounded-xl " src={bgplaceholder}></img>
        </div>
        <div className="h-fit max-w-8 flex-1 "></div>
        <div className="mt-3 flex size-fit  flex-col border-purple-500 text-lessgreyish">
          <p className=" lg: flex h-4 w-28 rounded-sm bg-line text-sm font-normal "></p>
          <p className="bg-linefont-normal ml-1 mt-1  h-2 w-12 rounded-sm bg-line text-xs text-greyish md:hidden lg:flex"></p>
          <p className="ml-1  mt-1 h-2 w-20 text-nowrap rounded-sm bg-line text-xs font-normal text-greyish md:hidden lg:flex"></p>
          <div className="flex items-center border-slate-700 xs:mt-5 md:mt-2 lg:mt-5">
            <div className="text-lightgreen rounded-sm2 h-3 w-16 bg-line  px-3 py-0.5 text-xs font-extrabold">
              {/*{product ? (
              <>
                {"$"}
                {(product as { price: number }).price}
              </>
            ) : (
              <div className="mt-1 h-5 w-14 rounded-sm bg-line"></div>
            )}
          */}
            </div>
            <button className=" rounded-sm2 flex size-5 items-center justify-center bg-line transition  hover:bg-greyhover active:bg-greyclick  xs:ml-3 md:ml-1 lg:ml-3"></button>
          </div>
        </div>
      </div>
    </>
  );
}
