import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as covidService from "../../services/covidService";
import { AppName } from "../contants";

const countryEmptyState = {
  data: [], // data countries
  iso: "",
};

export const getCountries = createAsyncThunk(
  `${AppName.country}/loadData`,
  async () => {
    return await covidService.getStatusCountries();
  }
);

export const countrySlice = createSlice({
  name: AppName.country,
  initialState: countryEmptyState,
  reducers: {
    resetCountry: () => countryEmptyState,
    updateISO: (state, action) => ({ ...state, iso: action.payload }),
  },

  extraReducers: {
    [getCountries.fulfilled]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { resetCountry, updateISO } = countrySlice.actions;

// The function below is called a selector and allows us to select country data
// from state. For example: `useSelector((state) => state.country.data)`
export const selectCountry = (state) => state.country.data;
export const selectCountryISO = (state) => state.country.iso;

export default countrySlice.reducer;
