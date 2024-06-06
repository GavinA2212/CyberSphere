import MainShowcase from "./ShopComponents/MainShowcase.tsx";
import FeaturedShowcase from "./ShopComponents/FeaturedShowcase.tsx";

export default function Shop() {
  return (
    <>
      <div className="mt-28 flex min-h-screen flex-col items-center font-DMSans ">
        <MainShowcase />
        <FeaturedShowcase />
      </div>
    </>
  );
}
