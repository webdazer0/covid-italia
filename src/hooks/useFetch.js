import { useState, useEffect } from "react";
import * as covidService from "../services/covidService";

const useFetch = () => {
  const [countryList, setCountryList] = useState([]);
  const [countryListIso, setCountryListIso] = useState([]);
  const [allDeaths, setAllDeaths] = useState(0);
  const [allConfirmed, setAllConfirmed] = useState(0);
  const [allRecovered, setAllRecovered] = useState(0);

  const loadCountries = async () => {
    const data = await covidService.getStatusCountries();

    const dataOrderByDeaths = data
      .filter((elem) => elem.confirmed >= 0)
      .sort((a, b) => a.confirmed - b.confirmed)
      .reverse();
    const dataIso = data.filter((elem) => elem.countrycode);

    const totalDeaths = data
      .filter((elem) => elem.deaths >= 0)
      .reduce((total, elem) => total + elem.deaths, 0);

    const totalConfirmed = data
      .filter((elem) => elem.confirmed >= 0)
      .reduce((total, elem) => total + elem.confirmed, 0);

    const totalRecovered = data
      .filter((elem) => elem.recovered >= 0)
      .reduce((total, elem) => total + elem.recovered, 0);

    setCountryList(dataOrderByDeaths);
    setCountryListIso(dataIso);
    setAllDeaths(totalDeaths);
    setAllConfirmed(totalConfirmed);
    setAllRecovered(totalRecovered);
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return { countryList, countryListIso, allDeaths, allConfirmed, allRecovered };
};

export default useFetch;
