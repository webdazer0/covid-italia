import { useState, useEffect } from "react";

const useFetch = () => {
  const URI_API =
    "https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest";

  const [countryList, setCountryList] = useState([]);
  const [countryListIso, setCountryListIso] = useState([]);
  const [allDeaths, setAllDeaths] = useState(0);
  const [allConfirmed, setAllConfirmed] = useState(0);
  const [allRecovered, setAllRecovered] = useState(0);

  const all = async () => {
    const res = await fetch(URI_API);
    const data = await res.json();
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

    // console.log("allDeaths");
    // console.log(allDeaths);
    // console.log(allConfirmed);
    // console.log(allRecovered);
    // console.log("TOTAL MUERTES: ", allDeaths);
    // setCountryList(data);
    setCountryList(dataOrderByDeaths);
    setCountryListIso(dataIso);
    setAllDeaths(totalDeaths);
    setAllConfirmed(totalConfirmed);
    setAllRecovered(totalRecovered);
  };

  useEffect(() => {
    all();
  }, []);

  return { countryList, countryListIso, allDeaths, allConfirmed, allRecovered };
};

export default useFetch;
