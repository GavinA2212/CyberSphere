import MainShowcase from "./HomePageComponents/MainShowcase.tsx";
import FeaturedShowcase from "./HomePageComponents/FeaturedShowcase.tsx";

export default function Shop() {
  return (
    <>
      <div className=" flex min-h-screen flex-col items-center font-DMSans ">
        <MainShowcase />
        <FeaturedShowcase />
      </div>
    </>
  );
}
