import { useEffect, useState } from "react";
import Login from "./Login";
import MyOrders from "./MyOrders";
import NavBar from "./NavBar";
import Shop from "./Shop";
import Support from "./Support";
import { Context } from "./Context";
import { States } from "./interfaces/Interfaces";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const APIURL = import.meta.env.VITE_API_URL;

  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${APIURL}/api/products/`);
      const jsonData = await response.json();
      console.log(jsonData);
      setProductArray(jsonData);
    };
    fetchProducts();
    console.log(productArray[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const state: States = {
    products: productArray,
  };

  return (
    <Context.Provider value={state}>
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
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
