export interface Product {
  id: number;
  created: string;
  updated: string;
  name: string;
  price: number;
  stock: number;
  created_by: string;
  description: string | null;
  discountprice: number | null;
  bestseller: boolean;
  rating: number;
  ratingcount: number;
  coverphoto: string;
  featuredphoto: string | null;
  category: number;
  featured: number;
}

export interface FeaturedCategory {
  id: number;
  created: string;
  updated: string;
  category_name: string;
}
export interface Category {
  id: number;
  created: string;
  updated: string;
  category_name: string;
}

export interface States {
  products: Product[];
  featuredCategories: FeaturedCategory[];
  categories: Category[];
  isLoading: boolean;
}
