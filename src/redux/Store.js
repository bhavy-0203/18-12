import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Slice/User";
import { productReducer } from "./Slice/product";

const Store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer
  },
});

export default Store;
