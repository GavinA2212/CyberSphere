import MainShowcase from "./Components/MainShowcase.tsx";
import FeaturedShowcase from "./Components/FeaturedShowcase.tsx";

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
