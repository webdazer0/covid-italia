import React from "react";
import { format } from "timeago.js";
import "../lib/addLang"; // Aggiunge lingue a timeago.js: Italiano & Spagnolo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { IMAGE_API, IMAGE_FALLBACK } from "../config/data";

function Card({
  countryregion,
  deaths,
  confirmed,
  recovered,
  provincestate,
  lastupdate,
  countrycode,
}) {
  const urlFlag = countrycode
    ? `${IMAGE_API}${countrycode.iso3.toLowerCase()}.svg`
    : IMAGE_FALLBACK;
  const codice =
    deaths > 50000 ? "urgency" : deaths > 5000 ? "dangermax" : "notnormal";

  return (
    <div className="col-md-6 col-lg-4 mt-5 text-center">
      <div className={`card ${codice}`}>
        <div className="card-header">
          <div className="card-title">
            <img
              loading="lazy"
              className="img-fluid"
              src={urlFlag}
              alt={countryregion}
              title={countryregion}
              height="15px"
            />
            <h4 className="h6 mb-0">{countryregion}</h4>
          </div>

          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            {provincestate ? (
              <span className="badge badge-pill badge-danger mt-3">
                {provincestate}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="card-body">
          <p className="lead mb-2">
            <span className="text-danger h5">
              <FontAwesomeIcon icon={faUserTimes} /> {deaths}
            </span>
            <small className="text-danger h6 d-block">morti</small>
          </p>
          <p className="lead mb-1">
            <span className="text-warning h1">{confirmed}</span>
            <small className="text-warning h6 d-block">casi confermati</small>
          </p>
          <p className="lead mb-0">
            <span className="text-success h6 ">{recovered}</span>
            <small className="text-success h6 d-block">ricoverati</small>
          </p>
        </div>
        <div className="card-footer">
          <small>aggiornato: {format(lastupdate, "it")}</small>
        </div>
      </div>
    </div>
  );
}

export default Card;
