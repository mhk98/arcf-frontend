// import cartSlice from "@/Redux-Thunk/reducers/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { aboutApi } from "../features/about/about";
import { faqApi } from "../features/faq/faq";
import { sliderApi } from "../features/slider/slider";

const store = configureStore({
  reducer: {
    [sliderApi.reducerPath]: sliderApi.reducer,
    [faqApi.reducerPath]: faqApi.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sliderApi.middleware,
      faqApi.middleware,
      aboutApi.middleware
    ),
});

export default store;
