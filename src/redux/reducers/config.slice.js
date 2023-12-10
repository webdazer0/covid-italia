import { createSlice } from "@reduxjs/toolkit";
import { AppName } from "../contants";

const configEmptyState = {
  data: [],
  darkTheme: false,
};

export const configSlice = createSlice({
  name: AppName.config,
  initialState: configEmptyState,
  reducers: {
    toggleTheme: (state) => {
      return { ...state, darkTheme: !state.darkTheme };
    },
    toggleThemeFromOS: (state, action) => {
      return { ...state, darkTheme: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, toggleThemeFromOS } = configSlice.actions;

// The function below is called a selector and allows us to select darkTheme
// from state. For example: `useSelector((state) => state.config.darkTheme)`
export const selectDarkTheme = (state) => state.config.darkTheme;

export default configSlice.reducer;
