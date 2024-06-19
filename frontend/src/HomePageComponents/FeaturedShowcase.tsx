import { useState } from "react";
import bg_line_background from "/src/assets/bg-line.png";
import star from "/src/assets/star.png";
import { Context } from "../Context";
import React from "react";
import { FeaturedProduct } from "./FeaturedProduct";

export default function FeaturedShowcase() {
  const [featuredButtonStatus, setFeaturedButtonStatus] = useState("keyboards");
  const { products } = React.useContext(Context);

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

  return (
    <>
      <div className="mt-16 flex min-h-sixtytwop w-seventyp  flex-1 items-center justify-center gap-0 border border-blue-500 xs:flex-col md:flex-row md:items-start md:gap-4 lg:gap-7">
        <div className="mb-4 flex h-fit w-full flex-col md:hidden">
          <p className=" flex text-xl05 font-semibold tracking-wide text-gray-100 md:hidden">
            Featured
          </p>
          <p className=" flex text-sm font-normal text-greyish md:hidden">
            What's best in each category
          </p>
        </div>

        <div
          id="featuredcontainer"
          className="md:flex-3 flex  flex-1 flex-col border border-blue-500 md:max-w-featuresize"
        >
          {products[0] ? (
            <>
              <div className="relative size-fit items-center justify-center">
                <img
                  src={(products[0] as { featuredphoto: string }).featuredphoto}
                  className="size-fit rounded-xl"
                ></img>
                <div className=" border-1 absolute left-6 top-5 flex items-center justify-center gap-1 rounded-full border-line bg-white px-5 py-1.5   lg:px-5">
                  <img className="mb-0.5 size-4" src={star}></img>
                  <p className="text-xs font-medium  text-black">Popular</p>
                </div>
                <button className="border-1 absolute bottom-5 left-6 rounded-full border-greyish px-10 py-1 text-sm font-normal text-lessgreyish md:px-8 lg:px-10">
                  Buy
                </button>
              </div>
            </>
          ) : (
            <img src={bg_line_background} className="size-fit rounded-xl"></img>
          )}
          <div
            id="bottomdetails"
            className="border-bg-green-500 flex h-16 w-full   md:max-w-featuresize"
          >
            <div className="flex flex-col">
              <p className="mt-3 text-xl05 font-semibold tracking-wide text-gray-100 ">
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
            <div className="flex flex-1 flex-col items-end border border-purple-500">
              <p className=" mt-3 text-sm font-normal text-greyish">
                {products[0] ? (
                  <>
                    {(products[0] as { stock: number }).stock}
                    {" in stock"}
                  </>
                ) : (
                  <div className="mt-1 h-4 w-14 rounded-sm bg-line"></div>
                )}
              </p>
              <div className="text-lightgreen border-lightgreen text-md border-3 mt-2 rounded-md px-4 font-extrabold">
                {products[0] ? (
                  <>
                    {"$"}
                    {(products[0] as { price: number }).price}
                  </>
                ) : (
                  <div className="mt-1 h-5 w-14 rounded-sm bg-line"></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-2  mt-3 flex size-full flex-1 flex-col border border-red-500 md:mt-0">
          <p className=" hidden text-xl05 font-semibold tracking-wide text-gray-100 md:inline-block">
            Featured
          </p>
          <p className=" hidden text-sm font-normal text-greyish md:inline-block">
            What's best in each category
          </p>
          <div
            id="buttons"
            className="flex:1 twol:grid-cols-4 twol:grid-rows-1 mt-3 grid max-w-lg grid-cols-2 grid-rows-2 gap-2 lg:mt-6 lg:gap-5"
          >
            <button
              className={`${featuredButtonStatus == "keyboards" ? "bg-purp " : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex md:text-2xs items-center justify-center whitespace-nowrap rounded-full  px-6  py-2.5 text-xs tracking-wide text-lessgreyish transition  lg:text-xs`}
              onClick={handleKeyboardsClick}
            >
              Keyboards
            </button>
            <button
              className={`${featuredButtonStatus == "cameras" ? "bg-purp " : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex md:text-2xs items-center justify-center whitespace-nowrap rounded-full px-6  py-2.5 text-xs tracking-wide text-lessgreyish transition  lg:text-xs`}
              onClick={handleCamerasClick}
            >
              Cameras
            </button>
            <button
              className={`${featuredButtonStatus == "mouses" ? "bg-purp " : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex md:text-2xs  items-center justify-center whitespace-nowrap rounded-full px-6  py-2.5 text-xs tracking-wide text-lessgreyish transition  lg:text-xs`}
              onClick={handleMousesClick}
            >
              Mouses
            </button>
            <button
              className={`${featuredButtonStatus == "headphones" ? "bg-purp " : "border-2 border-line hover:bg-greyhover active:bg-greyclick"}flex md:text-2xs  items-center justify-center whitespace-nowrap rounded-full px-6  py-2.5  text-xs tracking-wide text-lessgreyish transition  lg:text-xs`}
              onClick={handleHeadphonesClick}
            >
              Headphones
            </button>
          </div>
          <div className=" mt-6 h-0.5 w-full bg-line"></div>
          <div className=" border-1  mt-8 grid min-h-80 max-w-full border-purple-700">
            {products[0] && <FeaturedProduct product={products[0]} />}
          </div>
        </div>
      </div>
      <div className=" mt-14 h-0.5 w-seventyp bg-line"></div>
      <div className=" mt-14 h-0.5 w-seventyp bg-line"></div>
    </>
  );
}
