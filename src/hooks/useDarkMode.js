import { selectDarkTheme, toggleTheme } from "../redux/reducers/config.slice";
import { useDispatch, useSelector } from "react-redux";

const useDarkMode = () => {
  const darkTheme = useSelector(selectDarkTheme);
  const dispatch = useDispatch();

  const onChangeTheme = () => {
    dispatch(toggleTheme());
    //
  };

  const mainClass = darkTheme ? "is-dark-mode" : "is-light-mode";

  return {
    mainClass,
    darkTheme,
    onChangeTheme,
  };
};

export default useDarkMode;
