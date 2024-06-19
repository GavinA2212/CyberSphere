export interface Product {
  category: number;
  coverphoto: string;
  created: string;
  created_by: string;
  description: string | null;
  discountprice: number | null;
  featured: number;
  featuredphoto: string;
  id: number;
  name: string;
  price: number;
  stock: number;
  updated: string;
}
export interface ProductComponentProps {
  product: Product;
}
