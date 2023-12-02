import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../redux/reducers/country.slice";

function useApp() {
  const dispatch = useDispatch();

  const loadData = useCallback(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {};
}
export default useApp;
