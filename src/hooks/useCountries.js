import { useSelector } from "react-redux";

const useCountries = () => {
  const countries = useSelector((state) => state.country.data);

  // dataOrderByDeaths
  const countryList = countries
    .filter((elem) => elem.confirmed >= 0)
    .sort((a, b) => a.confirmed - b.confirmed)
    .reverse();

  const countryListByISO = countries.filter((elem) => elem.countrycode);

  // deaths/confirmed/recovered
  const totalDeaths = countries
    .filter((elem) => elem.deaths >= 0)
    .reduce((total, elem) => total + elem.deaths, 0);

  const totalConfirmed = countries
    .filter((elem) => elem.confirmed >= 0)
    .reduce((total, elem) => total + elem.confirmed, 0);

  const totalRecovered = countries
    .filter((elem) => elem.recovered >= 0)
    .reduce((total, elem) => total + elem.recovered, 0);

  return {
    countryList,
    countryListByISO,
    // deaths/confirmed/recovered
    info: {
      deaths: totalDeaths,
      confirmed: totalConfirmed,
      recovered: totalRecovered,
    },
  };
};

export default useCountries;
