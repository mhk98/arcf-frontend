// import cartSlice from "@/Redux-Thunk/reducers/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { aboutApi } from "../features/about/about";
import { aboutARCFApi } from "../features/aboutARCF/aboutARCF";
import { allEventsApi } from "../features/allEvents/allEvents";
import { assistantViceChairmanApi } from "../features/assistantViceChairman/assistantViceChairman";
import { bannerApi } from "../features/banner/banner";
import { chairmanApi } from "../features/chairman/chairman";
import { contactSliderApi } from "../features/contactSlider/contactSlider";
import { currentChairmanApi } from "../features/currentChairman/currentChairman";
import { directorApi } from "../features/director/Director";
import { donationApi } from "../features/donation/donation";
import { donationCategoryDescriptionApi } from "../features/donationBannerDescription/donationBannerDescription";
import { EventsBannerApi } from "../features/events/events";
import { eventsCategoryDescriptionApi } from "../features/eventsCategoryDescription/eventsCategoryDescriptionApi";
import { EventsDetailsApi } from "../features/eventsDetails/eventsDetails";
import { faqApi } from "../features/faq/faq";
import { GalleryCategoryDescriptionApi } from "../features/galleryBannerDescription/galleryBannerDescription";
import { healthApi } from "../features/health/health";
import { healthBannerApi } from "../features/healthBanner/healthBanner";
import { healthCategoryDetailsApi } from "../features/healthCategoryDetails/healthCategoryDetails";
import { healthDetailsApi } from "../features/healthDetails/healthDetails";
import { managementApi } from "../features/management/management";
import { NewsApi } from "../features/news/news";
import { newsBannerApi } from "../features/newsBanner/newsBanner";
import { newsCategoryDescriptionApi } from "../features/newsDetails/newsDetails";
import { projectsBannerApi } from "../features/projectBanner/projectBanner";
import { projectSubCategoryApi } from "../features/projectSubCategory/projectSubCategory";
import { ProjectSubCategoryDetailsApi } from "../features/projectSubCategoryDetails/projectSubCategoryDetails";
import { ProjectSubCategoryHeaderApi } from "../features/projectSubCategoryHeader/projectSubCategoryHeader";
import { projectsApi } from "../features/projects/projects";
import { projectsDetailsApi } from "../features/projectsDetails/projectsDetails";
import { sliderApi } from "../features/slider/slider";
import { viceChairmanApi } from "../features/viceChairman/viceChairman";
import { VolunteerApi } from "../features/volunteer/volunteer";

const store = configureStore({
  reducer: {
    [sliderApi.reducerPath]: sliderApi.reducer,
    [faqApi.reducerPath]: faqApi.reducer,
    [aboutApi.reducerPath]: aboutApi.reducer,
    [aboutARCFApi.reducerPath]: aboutARCFApi.reducer,
    [bannerApi.reducerPath]: bannerApi.reducer,
    [chairmanApi.reducerPath]: chairmanApi.reducer,
    [currentChairmanApi.reducerPath]: currentChairmanApi.reducer,
    [viceChairmanApi.reducerPath]: viceChairmanApi.reducer,
    [assistantViceChairmanApi.reducerPath]: assistantViceChairmanApi.reducer,
    [directorApi.reducerPath]: directorApi.reducer,
    [managementApi.reducerPath]: managementApi.reducer,
    [VolunteerApi.reducerPath]: VolunteerApi.reducer,

    [projectsApi.reducerPath]: projectsApi.reducer,
    [healthApi.reducerPath]: healthApi.reducer,
    [healthBannerApi.reducerPath]: healthBannerApi.reducer,
    [healthDetailsApi.reducerPath]: healthDetailsApi.reducer,
    [projectsBannerApi.reducerPath]: projectsBannerApi.reducer,
    [projectsDetailsApi.reducerPath]: projectsDetailsApi.reducer,
    [healthCategoryDetailsApi.reducerPath]: healthCategoryDetailsApi.reducer,
    [projectSubCategoryApi.reducerPath]: projectSubCategoryApi.reducer,
    [ProjectSubCategoryDetailsApi.reducerPath]:
      ProjectSubCategoryDetailsApi.reducer,
    [ProjectSubCategoryHeaderApi.reducerPath]:
      ProjectSubCategoryHeaderApi.reducer,
    [NewsApi.reducerPath]: NewsApi.reducer,
    [newsBannerApi.reducerPath]: newsBannerApi.reducer,
    [newsCategoryDescriptionApi.reducerPath]:
      newsCategoryDescriptionApi.reducer,
    [EventsBannerApi.reducerPath]: EventsBannerApi.reducer,
    [EventsDetailsApi.reducerPath]: EventsDetailsApi.reducer,
    [allEventsApi.reducerPath]: allEventsApi.reducer,
    [donationApi.reducerPath]: donationApi.reducer,
    [donationCategoryDescriptionApi.reducerPath]:
      donationCategoryDescriptionApi.reducer,
    [GalleryCategoryDescriptionApi.reducerPath]:
      GalleryCategoryDescriptionApi.reducer,
    [contactSliderApi.reducerPath]: contactSliderApi.reducer,
    [eventsCategoryDescriptionApi.reducerPath]:
      eventsCategoryDescriptionApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sliderApi.middleware,
      faqApi.middleware,
      aboutApi.middleware,
      bannerApi.middleware,

      aboutARCFApi.middleware,

      chairmanApi.middleware,
      currentChairmanApi.middleware,
      viceChairmanApi.middleware,

      assistantViceChairmanApi.middleware,
      directorApi.middleware,
      managementApi.middleware,
      VolunteerApi.middleware,

      projectsApi.middleware,
      healthApi.middleware,
      healthBannerApi.middleware,
      healthDetailsApi.middleware,
      projectsBannerApi.middleware,
      projectsDetailsApi.middleware,
      healthCategoryDetailsApi.middleware,
      projectSubCategoryApi.middleware,
      ProjectSubCategoryDetailsApi.middleware,
      ProjectSubCategoryHeaderApi.middleware,
      NewsApi.middleware,
      newsBannerApi.middleware,
      newsCategoryDescriptionApi.middleware,
      EventsBannerApi.middleware,
      EventsDetailsApi.middleware,
      allEventsApi.middleware,
      donationApi.middleware,
      donationCategoryDescriptionApi.middleware,
      GalleryCategoryDescriptionApi.middleware,
      contactSliderApi.middleware,
      eventsCategoryDescriptionApi.middleware
    ),
});

export default store;
