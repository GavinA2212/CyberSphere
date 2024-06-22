import fullstar from "/src/assets/starfull.png";
import emptystar from "/src/assets/starempty.png";
import halfstar from "/src/assets/starhalfempty.png";

interface StarRatingsProps {
  rating: number;
}
export const StarRatings: React.FC<StarRatingsProps> = ({ rating }) => {
  return (
    <div id="stars" className="flex ">
      {Array.from({ length: 5 }).map((_, index) => {
        if (index + 1 <= Math.floor(rating)) {
          return (
            <div key={index} className="size-4 text-white">
              <img src={fullstar} alt="full star" />
            </div>
          );
        }
        if (index + 1 > Math.floor(rating) && index + 1 <= Math.ceil(rating)) {
          return (
            <div key={index} className="size-4 text-white">
              <img src={halfstar} alt="half star" />
            </div>
          );
        }
        return (
          <div key={index} className="size-4 text-white">
            <img src={emptystar} alt="empty star" />
          </div>
        );
      })}
    </div>
  );
};
