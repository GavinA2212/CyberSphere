export default function Shop() {
  return (
    <>
      <div className="font-DMSans mt-28 flex h-screen flex-col items-center ">
        <div className="w-seventyp h-sixtytwop mt-14 flex gap-12 border-2 border-blue-500 xs:flex-col md:flex-row">
          <div className="h-sixtytwop mt-16 flex w-1/2 flex-col border-2 border-red-500">
            <h1 className="inline-block text-5xl font-normal text-gray-100 ">
              Best study tool.
            </h1>
            <h1 className="text-5xl font-normal text-gray-100 ">Undeniably.</h1>
            <h2 className=" mt-4 text-base font-normal text-greyish">
              Check out the brand new lenova 500, one of the best laptops on the
              market right now.
            </h2>
            <div className="mt-10 flex gap-5">
              <button className=" flex items-center justify-center rounded-full bg-purp text-xs text-lessgreyish transition hover:bg-purphover active:bg-purpclick xs:h-8 xs:w-16  md:h-9 md:w-36 ">
                Buy now for $560
              </button>
              <button className=" flex items-center justify-center rounded-full border-2 border-line text-xs text-lessgreyish transition hover:bg-purphover active:bg-purpclick xs:h-8 xs:w-16  md:h-9 md:w-28">
                Learn more
              </button>
            </div>
          </div>
          <div className="w-thirtysixp mt-1 h-3/4  border-2 border-green-500"></div>
        </div>
        <div className=" w-seventyp h-0.5 bg-line"></div>
      </div>
    </>
  );
}
