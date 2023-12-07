import React from "react";
import Card from "./Card";
import useCountries from "../hooks/useCountries";
import { logger } from "../utils/logger";

// { countryregion, deaths, confirmed, recovered }
function CardList() {
  const { countryList, countryListByISO, byName } = useCountries();

  const getCountryListByName = () => {
    logger({ byName });
    return countryListByISO.filter(
      ({ countrycode }) => countrycode.iso3 === byName
    );
  };

  const hasSearch = byName.length > 0;

  const items = hasSearch ? getCountryListByName() : countryList;

  return items.map((elem) => {
    return <Card key={elem.countryregion + elem.provincestate} {...elem} />;
  });

  // return <>{byName.length !== 0 ? getCountry : getCountries}</>;
}

export default CardList;
