import { useEffect } from "react";
import {
  selectDarkTheme,
  toggleThemeFromOS,
  toggleTheme,
} from "../redux/reducers/config.slice";
import { useDispatch, useSelector } from "react-redux";

const useDarkMode = () => {
  const darkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();

  const onChangeTheme = () => {
    dispatch(toggleTheme());
    //
  };

  const mainClass = darkTheme ? "is-dark-mode" : "is-light-mode";

  useEffect(() => {
    const updateDarkTheme = (mq) => dispatch(toggleThemeFromOS(mq.matches));

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", updateDarkTheme);
    updateDarkTheme(mq);

    return () => mq.removeEventListener("change", updateDarkTheme);
  }, [dispatch]);

  return {
    mainClass,
    darkTheme,
    onChangeTheme,
  };
};

export default useDarkMode;
