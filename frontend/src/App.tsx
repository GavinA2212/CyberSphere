import Login from "./Login";
import MyOrders from "./MyOrders";
import NavBar from "./NavBar";
import Shop from "./Shop";
import Support from "./Support";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
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
  );
}
