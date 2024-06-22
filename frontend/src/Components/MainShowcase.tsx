import Computershowcase from "/src/assets/computer.png";

export default function MainShowcase() {
  return (
    <>
      <div className="mt-28 flex min-h-sixtytwop  w-seventyp gap-0  border-blue-500 xs:flex-col md:mt-navoffset md:flex-row md:gap-12">
        <div className="mt-4 h-fit min-h-sixtytwop w-full flex-col   border-red-500 md:mt-16 md:w-2/5">
          <h1 className="ml-1 inline-block whitespace-nowrap text-4xl font-normal tracking-wide text-gray-100 md:text-5xl ">
            Best study tool.
          </h1>
          <h1 className="ml-1 text-4xl font-normal tracking-wide text-gray-100 md:text-5xl ">
            Undeniably.
          </h1>
          <h2 className=" ml-1 mt-4 text-sm font-normal text-greyish">
            Check out the brand new lenova 500, one of the best laptops on the
            market right now.
          </h2>
          <div className="ml-2 mt-12 hidden gap-5 md:flex">
            <button className=" flex items-center justify-center whitespace-nowrap rounded-full bg-purp px-6 py-2.5 text-xs tracking-wide text-lessgreyish transition hover:bg-purphover active:bg-purpclick ">
              Buy now for $560
            </button>
            <button className="flex items-center justify-center whitespace-nowrap rounded-full border-2 border-line px-6 py-2.5 text-xs tracking-wide text-lessgreyish transition hover:bg-greyhover active:bg-greyclick">
              Learn more
            </button>
          </div>
        </div>
        <div className=" flex max-h-96 items-center justify-center  border-green-500  ">
          <img
            src={Computershowcase}
            className="pb-18 max-h-96 pt-4 lg:pl-20"
          ></img>
        </div>
        <div className=" mt-6 flex gap-5  md:hidden">
          <button className=" flex items-center justify-center rounded-full bg-purp px-6 py-2.5 text-xs text-lessgreyish transition hover:bg-purphover active:bg-purpclick ">
            Buy now for $560
          </button>
          <button className=" flex items-center justify-center rounded-full border-2 border-line px-6 py-2.5 text-xs text-lessgreyish transition hover:bg-greyhover active:bg-greyclick">
            Learn more
          </button>
        </div>
      </div>
      <div className=" mt-14 h-0.5 w-seventyp bg-line"></div>
    </>
  );
}
