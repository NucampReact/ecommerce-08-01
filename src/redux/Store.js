// Responsible for configuring the store of Redux
/*
  Store = [ Reducer, State ]
  Reducer = Pure function
*/
import ShopReducer from "./ShopReducer";

import { createStore, combineReducers } from "redux";

export const MyStore = createStore(
  /* 1st arg: Reducer */
  ShopReducer,
  /* 2nd arg: Enhancers/Middleware */
  {}
)