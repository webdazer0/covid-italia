import { configureStore } from "@reduxjs/toolkit";
import { countrySlice } from "./reducers/country.slice";
import { configSlice } from "./reducers/config.slice";

const store = configureStore({
  reducer: {
    country: countrySlice.reducer,
    config: configSlice.reducer,
  },
});

export default store;
