import { Product } from "../interfaces/Interfaces";
import CartIcon from "../assets/cart.png";

interface ProductComponentProps {
  product: Product;
}
export const FeaturedProduct: React.FC<ProductComponentProps> = ({
  product,
}) => {
  return (
    <>
      <div className="twol:flex-row  twol:items-center flex flex-col  gap-0.5 border-red-500">
        <div className="max-w-33 max-h-33 flex  ">
          <img className="size-fit rounded-xl " src={product.coverphoto}></img>
        </div>
        <div className="h-fit max-w-8 flex-1 "></div>
        <div className="mt-3 flex size-fit  flex-col border-purple-500 text-lessgreyish">
          <p className=" lg: flex text-sm font-normal ">Flow Gaming Keyboard</p>
          <p className="ml-1 mt-1 text-xs font-normal text-greyish md:hidden lg:flex">
            {" "}
            6 in stock
          </p>
          <p className="ml-1 text-nowrap text-xs font-normal text-greyish md:hidden lg:flex">
            {" "}
            Designed by Flowcom
          </p>
          <div className="flex items-center border-slate-700 xs:mt-5 md:mt-2 lg:mt-5">
            <div className="text-lightgreen border-lightgreen border-2.5 rounded-sm2  px-3 py-0.5 text-xs font-extrabold">
              {/*{product ? (
              <>
                {"$"}
                {(product as { price: number }).price}
              </>
            ) : (
              <div className="mt-1 h-5 w-14 rounded-sm bg-line"></div>
            )}
          */}
              $41.99
            </div>
            <button className=" flex size-7 items-center justify-center rounded-full transition  hover:bg-greyhover active:bg-greyclick  xs:ml-3 md:ml-1 lg:ml-3">
              <img src={CartIcon} className="h-6  w-6 "></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
