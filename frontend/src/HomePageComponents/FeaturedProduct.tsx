import { Product } from "../interfaces/Interfaces";

interface ProductComponentProps {
  product: Product;
}
export const FeaturedProduct: React.FC<ProductComponentProps> = ({
  product,
}) => {
  return (
    <img
      className="max-h-32 max-w-32 rounded-xl "
      src={product.coverphoto}
    ></img>
  );
};
