import React from "react";
import "./selector.css";
import useCountries from "../hooks/useCountries";

function Selector() {
  const { countryListByISO, onISOChanged } = useCountries();

  const onChangedIsoCountry = (event) => {
    event.preventDefault();
    onISOChanged(event.target.value);
  };

  const countrySelect = countryListByISO.map((elem) => {
    return (
      <option
        key={elem.countryregion + elem.provincestate}
        value={elem.countrycode.iso3}
      >
        {elem.countryregion}
        {elem.provincestate ? " - (" + elem.provincestate + ")" : ""}
      </option>
    );
  });

  return (
    <div className="col-md-12 mt-5 mt-md-0">
      <select className="custom-select" onChange={onChangedIsoCountry}>
        <option>Selezionare Paese</option>
        {countrySelect}
      </select>
    </div>
  );
}

export default Selector;
