import React from "react";
import "./selector.css";
import useFetch from "../hooks/useFetch";

function Selector({ getIsoCountry }) {
  const { countryListIso } = useFetch();

  const countrySelect = countryListIso.map((elem) => {
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
      <select className="custom-select" onChange={getIsoCountry}>
        <option>Selezionare Paese</option>
        {countrySelect}
      </select>
    </div>
  );
}

export default Selector;
