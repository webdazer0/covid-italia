import React from "react";
import Card from "./Card";
import useCountries from "../hooks/useCountries";
import { logger } from "../utils/logger";

// { countryregion, deaths, confirmed, recovered }
function CardList() {
  const { countryList, countryListByISO, byName } = useCountries();

  const getCountries = countryList.map((elem) => {
    return <Card key={elem.countryregion + elem.provincestate} {...elem} />;
  });

  const countryListASC = countryList
    .filter((country) => country.deaths >= 0) // show only with param
    .sort((a, b) => a.deaths - b.deaths); // order ASC

  let getCountry = [];

  if (byName.length > 0) {
    const countryListByName = countryListByISO.filter(
      (elem) => elem.countrycode.iso3 === byName
    );
    logger({ byName });

    getCountry = countryListByName.map((elem) => {
      return <Card key={elem.countryregion + elem.provincestate} {...elem} />;
    });
  }

  return <>{byName.length !== 0 ? getCountry : getCountries}</>;
}

export default CardList;
