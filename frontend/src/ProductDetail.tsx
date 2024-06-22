import React from "react";
import { Context } from "./Context";
import { useParams } from "react-router-dom";
import cartIcon from "./assets/cart.png";
import { StarRatings } from "./Components/StarRatings";

export default function ProductDetail() {
  const { productId } = useParams();
  const { products } = React.useContext(Context);
  const { isLoading } = React.useContext(Context);
  const product = products.find((product) => product.name === productId);

  return (
    <>
      {isLoading ? (
        <>
          <div className="flex size-full items-center justify-center  text-white">
            <p className="text-xl">Loading</p>
          </div>
        </>
      ) : (
        <>
          {product ? (
            <>
              <div className=" flex min-h-screen flex-col items-center font-DMSans ">
                <div className="mt-28 flex   w-seventyp gap-0  border-blue-500 xs:flex-col md:mt-navoffset md:flex-row md:gap-12">
                  <div className="flex size-full gap-4 xs:flex-col md:flex-row">
                    <div id="photoscontainer" className="flex flex-1 flex-col">
                      <div className=" flex max-w-2xl flex-1 items-center justify-center border-green-500">
                        <div className="max-w-500 max-h-500 flex items-center justify-center">
                          <img
                            src={product.coverphoto}
                            className="rounded-xl "
                          ></img>
                        </div>
                      </div>
                      <div id="bottomphotoscontainer" className="flex "></div>
                    </div>
                    <div
                      id="detailscontainer"
                      className="  max-w-96 flex-1 flex-col  border-red-400"
                    >
                      <p className="mt-12 text-2xl  text-white">
                        {product.name}
                      </p>
                      <p className="mt-2 text-sm text-greyish">
                        <>
                          {"Designed by "}
                          {product.created_by}
                        </>
                      </p>
                      <div className="justify center mt-5 flex items-center ">
                        <p className="mr-1 mt-0.5 text-sm text-white">
                          {product.rating}
                        </p>
                        <StarRatings rating={product.rating} />
                        <p className="ml-2 mt-0.5 text-xs text-white underline">
                          <>
                            {product.ratingcount}
                            {" reviews"}
                          </>
                        </p>
                      </div>

                      <p className="mt-4 text-lg text-white">
                        <>
                          {"$"}
                          {product.price}
                        </>
                      </p>
                      <p className="text-sm text-greyish">
                        <>
                          {product.stock}
                          {" in stock"}
                        </>
                      </p>
                      <div className="mt-24 flex flex-col items-center">
                        <p className="mb-2 text-base text-white">
                          In stock. Ready to ship
                        </p>
                        <button className=" flex h-14 w-full items-center justify-center rounded-sm bg-purp transition hover:bg-purphover active:bg-purpclick">
                          <img
                            src={cartIcon}
                            className="mb-0.5 mr-1 size-5"
                          ></img>
                          <p className="text-sm text-white">ADD TO CART</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex size-full items-center justify-center text-white">
                <p className="text-xl">product not found</p>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
