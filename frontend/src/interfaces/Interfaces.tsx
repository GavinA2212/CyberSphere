export interface Product {
  category: number;
  coverphoto: string;
  created: string;
  created_by: string | null;
  description: string | null;
  discountprice: number | null;
  featured: number;
  featuredphoto: string | null;
  id: number;
  name: string;
  price: number;
  stock: number;
  updated: string;
}

export interface FeaturedCategory {
  id: number;
  created: string;
  updated: string;
  category_name: string;
}

export interface States {
  products: Product[];
  featuredCategories: FeaturedCategory[];
}
