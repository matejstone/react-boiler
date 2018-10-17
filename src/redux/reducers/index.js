import { combineReducers } from "redux";
import filters from "./filters";
import products from "./products";

export default combineReducers({ filters, products });
