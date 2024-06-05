import Computershowcase from "./assets/computer.png";

export default function Shop() {
  return (
    <>
      <div className="mt-28 flex min-h-screen flex-col items-center font-DMSans ">
        <div className="flex min-h-sixtytwop w-seventyp  gap-0 border-2 border-blue-500 xs:flex-col md:mt-14 md:flex-row md:gap-12">
          <div className="mt-1 h-fit min-h-sixtytwop w-full flex-col border-2  border-red-500 md:mt-16 md:w-2/5">
            <h1 className="inline-block text-5xl font-normal text-gray-100 ">
              Best study tool.
            </h1>
            <h1 className="text-5xl font-normal text-gray-100 ">Undeniably.</h1>
            <h2 className=" mt-4 text-base font-normal text-greyish">
              Check out the brand new lenova 500, one of the best laptops on the
              market right now.
            </h2>
            <div className="mt-10 hidden gap-5 md:flex">
              <button className=" flex h-9 w-36 items-center justify-center rounded-full bg-purp text-xs text-lessgreyish transition hover:bg-purphover active:bg-purpclick ">
                Buy now for $560
              </button>
              <button className=" flex h-9 w-28 items-center justify-center rounded-full border-2 border-line text-xs text-lessgreyish transition hover:bg-greyhover active:bg-greyclick">
                Learn more
              </button>
            </div>
          </div>
          <div className=" flex  max-h-96 items-center justify-center border-2  border-green-500 ">
            <img src={Computershowcase} className="max-h-96"></img>
          </div>
          <div className=" mt-6 flex gap-5  md:hidden">
            <button className=" flex h-9 w-36 items-center justify-center rounded-full bg-purp text-xs text-lessgreyish transition hover:bg-purphover active:bg-purpclick ">
              Buy now for $560
            </button>
            <button className=" flex h-9 w-28 items-center justify-center rounded-full border-2 border-line text-xs text-lessgreyish transition hover:bg-greyhover active:bg-greyclick">
              Learn more
            </button>
          </div>
        </div>
        <div className=" mt-6 h-0.5 w-seventyp bg-line"></div>
      </div>
    </>
  );
}
