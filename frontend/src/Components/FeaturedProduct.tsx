import { Product } from "../interfaces/Interfaces";
import CartIcon from "../assets/cart.png";
import { Link } from "react-router-dom";

interface ProductComponentProps {
  product: Product;
}
export const FeaturedProduct: React.FC<ProductComponentProps> = ({
  product,
}) => {
  return (
    <>
      <div className="twol:flex-row  twol:items-center flex flex-col  gap-0.5 border-red-500">
        <Link
          to={`/shop/products/${product.name}`}
          className="max-w-33 max-h-33 flex  "
        >
          <img className="size-fit rounded-xl " src={product.coverphoto}></img>
        </Link>
        <div className="h-fit max-w-8 flex-1 "></div>
        <div className="mt-3 flex size-fit  flex-col border-purple-500 text-lessgreyish">
          <p className=" lg: flex text-sm font-normal ">{product.name}</p>
          <p className="ml-1 mt-1 text-xs font-normal text-greyish md:hidden lg:flex">
            <>
              {product.stock}
              {" in stock"}
            </>
          </p>
          <p className="ml-1 text-nowrap text-xs font-normal text-greyish md:hidden lg:flex">
            <>
              {"Designed by "}
              {product.created_by}
            </>
          </p>
          <div className="flex items-center border-slate-700 xs:mt-5 md:mt-2 lg:mt-5">
            <div className="text-lightgreen border-lightgreen border-2.5 rounded-sm2  px-3 py-0.5 text-xs font-extrabold">
              {
                <>
                  {"$"}
                  {product.price}
                </>
              }
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
