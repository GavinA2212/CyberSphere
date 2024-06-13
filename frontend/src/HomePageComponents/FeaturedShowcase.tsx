import { useEffect, useState } from "react";

export default function FeaturedShowcase() {
  const APIURL = import.meta.env.VITE_API_URL;

  const [products, setProducts] = useState([]);

  const [keyboardsStatus, setKeyboardsStatus] = useState(true);
  const [CamerasStatus, setCamerasStatus] = useState(false);
  const [MousesStatus, setMousesStatus] = useState(false);
  const [HeadphonesStatus, setHeadphonesStatus] = useState(false);

  const handleKeyboardsClick = () => {
    setKeyboardsStatus(true);
    setCamerasStatus(false);
    setMousesStatus(false);
    setHeadphonesStatus(false);
  };
  const handleCamerasClick = () => {
    setKeyboardsStatus(false);
    setCamerasStatus(true);
    setMousesStatus(false);
    setHeadphonesStatus(false);
  };
  const handleMousesClick = () => {
    setKeyboardsStatus(false);
    setCamerasStatus(false);
    setMousesStatus(true);
    setHeadphonesStatus(false);
  };
  const handleHeadphonesClick = () => {
    setKeyboardsStatus(false);
    setCamerasStatus(false);
    setMousesStatus(false);
    setHeadphonesStatus(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${APIURL}/api/products/`);
      const jsonData = await response.json();
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
          className="md:max-w-featuresize max-w-smfeaturesize flex flex-1 flex-col"
        >
          <div className=" md:max-w-featuresize md:max-h-featuresize max-h-smfeaturesize max-w-smfeaturesize flex aspect-square  flex-1 items-center justify-center rounded-xl bg-line md:min-w-72">
            {products[0] ? (
              <img
                src={(products[0] as { featuredphoto: string }).featuredphoto}
                className="size-fit rounded-xl"
              />
            ) : (
              <div className=" md:max-w-featuresize md:max-h-featuresize max-h-smfeaturesize max-w-smfeaturesize  aspect-square flex-1  rounded-xl bg-line"></div>
            )}
          </div>
          <div
            id="bottomdetails"
            className="md:max-w-featuresize max-w-smfeaturesize border-bg-green-500 flex flex-1"
          >
            <p className="text wrap"></p>
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
              className={`${keyboardsStatus ? "bg-purp hover:bg-purphover active:bg-purpclick" : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex items-center justify-center whitespace-nowrap rounded-full px-6  py-2.5 text-xs tracking-wide text-lessgreyish  transition`}
              onClick={handleKeyboardsClick}
            >
              Keyboards
            </button>
            <button
              className={`${CamerasStatus ? "bg-purp hover:bg-purphover active:bg-purpclick" : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex items-center justify-center whitespace-nowrap rounded-full px-6  py-2.5 text-xs tracking-wide text-lessgreyish  transition`}
              onClick={handleCamerasClick}
            >
              Cameras
            </button>
            <button
              className={`${MousesStatus ? "bg-purp hover:bg-purphover active:bg-purpclick" : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex items-center justify-center whitespace-nowrap rounded-full px-6  py-2.5 text-xs tracking-wide text-lessgreyish  transition`}
              onClick={handleMousesClick}
            >
              Mouses
            </button>
            <button
              className={`${HeadphonesStatus ? "bg-purp hover:bg-purphover active:bg-purpclick" : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex items-center justify-center whitespace-nowrap rounded-full px-6  py-2.5 text-xs tracking-wide text-lessgreyish  transition`}
              onClick={handleHeadphonesClick}
            >
              Headphones
            </button>
          </div>
          <div className=" mt-8 h-0.5 w-full bg-line"></div>
        </div>
      </div>
      <div className=" mt-14 h-0.5 w-seventyp bg-line"></div>
      <div className=" mt-14 h-0.5 w-seventyp bg-line"></div>
    </>
  );
}
