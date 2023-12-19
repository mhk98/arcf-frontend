// import cartSlice from "@/Redux-Thunk/reducers/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { sliderApi } from "../features/slider/slider";
import { faqApi } from "../features/faq/faq";
import { aboutApi } from "../features/about/about";

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
