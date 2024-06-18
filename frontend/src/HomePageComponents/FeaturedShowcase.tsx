import { useEffect, useState } from "react";

export default function FeaturedShowcase() {
  const APIURL = import.meta.env.VITE_API_URL;

  const [products, setProducts] = useState([]);

  const [featuredButtonStatus, setFeaturedButtonStatus] = useState("keyboards");

  const handleKeyboardsClick = () => {
    setFeaturedButtonStatus("keyboards");
  };
  const handleCamerasClick = () => {
    setFeaturedButtonStatus("cameras");
  };
  const handleMousesClick = () => {
    setFeaturedButtonStatus("mouses");
  };
  const handleHeadphonesClick = () => {
    setFeaturedButtonStatus("headphones");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${APIURL}/api/products/`);
      const jsonData = await response.json();
      console.log(jsonData);
      setProducts(jsonData);
    };
    fetchProducts();
    console.log(products[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="mt-16 flex min-h-sixtytwop w-seventyp  flex-1  gap-0 border-blue-500 xs:flex-col md:flex-row md:gap-7">
        <div
          id="featuredcontainer"
          className="flex max-w-smfeaturesize flex-1 flex-col md:max-w-featuresize"
        >
          {products[0] ? (
            <img
              src={(products[0] as { featuredphoto: string }).featuredphoto}
              className="size-fit rounded-xl"
            />
          ) : (
            <div className=" aspect-square max-h-smfeaturesize max-w-smfeaturesize flex-1  rounded-xl bg-line  md:max-h-featuresize md:max-w-featuresize"></div>
          )}
          <div
            id="bottomdetails"
            className="border-bg-green-500 flex h-16 max-w-smfeaturesize  border-2 md:max-w-featuresize"
          >
            <div className="flex flex-col">
              <p className="mt-3 text-xl05 font-semibold tracking-wide text-gray-100 drop-shadow-sm ">
                {products[0] ? (
                  (products[0] as { name: string }).name
                ) : (
                  <div className="mt-1.5 h-5 w-64 rounded-sm bg-line"></div>
                )}
              </p>
              <p className=" text-sm font-normal text-greyish">
                {products[0] ? (
                  <>
                    Designed by{" "}
                    {(products[0] as { created_by: string }).created_by}
                  </>
                ) : (
                  <div className="mt-1 h-3 w-32 rounded-sm bg-line"></div>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-1 flex-col border-red-500 md:mt-0">
          <p className=" text-xl05 font-semibold tracking-wide text-gray-100 drop-shadow-sm">
            Featured
          </p>
          <p className=" text-sm font-normal text-greyish">
            What's best in each category
          </p>
          <div
            id="buttons"
            className="flex:1 mt-3 grid grid-cols-2 grid-rows-2 gap-3 lg:mt-6 lg:gap-5 xl:grid-cols-4 xl:grid-rows-1"
          >
            <button
              className={`${featuredButtonStatus == "keyboards" ? "bg-purp " : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex items-center justify-center whitespace-nowrap rounded-full px-6  py-2.5 text-xs tracking-wide text-lessgreyish  transition`}
              onClick={handleKeyboardsClick}
            >
              Keyboards
            </button>
            <button
              className={`${featuredButtonStatus == "cameras" ? "bg-purp " : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex items-center justify-center whitespace-nowrap rounded-full px-6  py-2.5 text-xs tracking-wide text-lessgreyish  transition`}
              onClick={handleCamerasClick}
            >
              Cameras
            </button>
            <button
              className={`${featuredButtonStatus == "mouses" ? "bg-purp " : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex items-center justify-center whitespace-nowrap rounded-full px-6  py-2.5 text-xs tracking-wide text-lessgreyish  transition`}
              onClick={handleMousesClick}
            >
              Mouses
            </button>
            <button
              className={`${featuredButtonStatus == "headphones" ? "bg-purp " : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex items-center justify-center whitespace-nowrap rounded-full px-6  py-2.5 text-xs tracking-wide text-lessgreyish  transition`}
              onClick={handleHeadphonesClick}
            >
              Headphones
            </button>
          </div>
          <div className=" mt-8 h-0.5 w-full bg-line"></div>
          <div className="min grid h-72 max-w-full border-2 border-purple-700"></div>
        </div>
      </div>
      <div className=" mt-14 h-0.5 w-seventyp bg-line"></div>
      <div className=" mt-14 h-0.5 w-seventyp bg-line"></div>
    </>
  );
}
