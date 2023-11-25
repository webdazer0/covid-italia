import { useState } from "react";

const useIsoCountry = () => {
  const [iso, setIso] = useState("");

  const getIsoCountry = (e) => {
    e.preventDefault();
    setIso(e.target.value);
  };

  return { iso, getIsoCountry };
};

export default useIsoCountry;
