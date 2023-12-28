// import cartSlice from "@/Redux-Thunk/reducers/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { aboutApi } from "../features/about/about";
import { faqApi } from "../features/faq/faq";
import { projectsApi } from "../features/projects/projects";
import { sliderApi } from "../features/slider/slider";

const store = configureStore({
  reducer: {
    [sliderApi.reducerPath]: sliderApi.reducer,
    [faqApi.reducerPath]: faqApi.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sliderApi.middleware,
      faqApi.middleware,
      aboutApi.middleware,
      projectsApi.middleware
    ),
});

export default store;
