import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as covidService from "../../services/covidService";

const COUNTRY_DATA_EMPTY_STATE = {
  data: [], // data countries
};

export const getCountries = createAsyncThunk("countries/getAll", async () => {
  return await covidService.getStatusCountries();
});

export const countrySlice = createSlice({
  name: "countries",
  initialState: COUNTRY_DATA_EMPTY_STATE,
  reducers: {
    resetCountry: () => COUNTRY_DATA_EMPTY_STATE,
  },
  extraReducers: {
    [getCountries.fulfilled]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { resetCountry } = countrySlice.actions;

export default countrySlice.reducer;
