import { useEffect, useState } from "react";
import Login from "./Login";
import MyOrders from "./MyOrders";
import NavBar from "./NavBar";
import Shop from "./Shop";
import Support from "./Support";
import { Context } from "./Context";
import { States } from "./interfaces/Interfaces";
import ProductDetail from "./ProductDetail";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const APIURL = import.meta.env.VITE_API_URL;

  const [isLoading, setIsLoading] = useState(false);
  const [productArray, setProductArray] = useState([]);
  const [featuredCategoryArray, setFeaturedCategoryArray] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(`${APIURL}/api/products/`);
    const jsonData = await response.json();
    console.log(jsonData);
    setProductArray(jsonData);
  };
  const fetchFeaturedCategories = async () => {
    const response = await fetch(`${APIURL}/api/productFeaturedCategories/`);
    const jsonData = await response.json();
    setFeaturedCategoryArray(jsonData);
  };
  const fetchCategories = async () => {
    const response = await fetch(`${APIURL}/api/productCategories/`);
    const jsonData = await response.json();
    setCategoryArray(jsonData);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetchProducts();
      setIsLoading(false);
      await fetchFeaturedCategories();
      await fetchCategories();
      console.log(productArray[0]);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const globalStates: States = {
    products: productArray,
    featuredCategories: featuredCategoryArray,
    categories: categoryArray,
    isLoading: isLoading,
  };

  return (
    <Context.Provider value={globalStates}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Shop />
              </>
            }
          />
          <Route
            path="/shop/"
            element={
              <>
                <NavBar />
                <Shop />
              </>
            }
          />
          <Route
            path="/myorders/"
            element={
              <>
                <NavBar />
                <MyOrders />
              </>
            }
          />
          <Route
            path="/support/"
            element={
              <>
                <NavBar />
                <Support />
              </>
            }
          />
          <Route
            path="/login/"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/Shop/Products/:productId"
            element={
              <>
                <NavBar />
                <ProductDetail />
              </>
            }
          />
          <Route
            path="/Products/:productId"
            element={
              <>
                <NavBar />
                <ProductDetail />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
