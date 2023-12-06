// import cartSlice from "@/Redux-Thunk/reducers/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { sliderApi } from "../features/slider/slider";

const store = configureStore({
  reducer: {
    [sliderApi.reducerPath]: sliderApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sliderApi.middleware),
});

export default store;
