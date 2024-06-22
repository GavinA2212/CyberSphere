import React from "react";
import { States } from "./interfaces/Interfaces";

const state: States = {
  products: [],
  featuredCategories: [],
  categories: [],
};
export const Context = React.createContext(state);
