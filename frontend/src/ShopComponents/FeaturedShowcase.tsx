import { useEffect, useState } from "react";

export default function FeaturedShowcase() {
  const APIURL = import.meta.env.VITE_API_URL;

  const [products, setProducts] = useState([]);

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
      <div className="mt-16 flex min-h-sixtytwop  w-seventyp  gap-0 border border-blue-500 xs:flex-col md:flex-row md:gap-12">
        <div className="  max-w-featuresize mah-h-featuresize rounded-xl bg-line">
          {products[0] && (
            <img
              src={(products[0] as { featuredphoto: string }).featuredphoto}
              className="size-fit rounded-xl"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col border border-red-500"></div>
      </div>
      <div className=" mt-14 h-0.5 w-seventyp bg-line"></div>
    </>
  );
}
