import React from "react";
import { PersonIcon } from "./icons/icons";
import { IMAGE_API, IMAGE_FALLBACK } from "../config/constants";
import { format } from "timeago.js";
import { UtilsNumber } from "../utils";

function Card({
  countryregion,
  deaths,
  confirmed,
  recovered,
  provincestate,
  lastupdate,
  countrycode,
}) {
  const getUrgency = (num) => {
    if (num > 50000) return "high";
    if (num > 5000) return "medium";
    return "low";
  };

  const urlFlag = countrycode
    ? `${IMAGE_API}/${countrycode.iso2.toLowerCase()}.svg`
    : IMAGE_FALLBACK;

  const codice = getUrgency(deaths);

  return (
    <CardContainer urgency={codice}>
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
          {provincestate ? <Badge>{provincestate}</Badge> : <></>}
        </div>
      </div>
      <div className="card-body">
        <Tile type="danger" title={deaths} content="morti" Icon={PersonIcon} />
        <Tile
          type="warning"
          title={confirmed}
          content="casi confermati"
          max={true}
        />
        <Tile type="success" title={recovered} content="ricoverati" />
      </div>
      <div className="card-footer">
        <small>aggiornato: {format(lastupdate, "it")}</small>
      </div>
    </CardContainer>
  );
}

export default Card;

const CardContainer = ({ children, className, urgency }) => {
  return (
    <div className="col-md-6 col-lg-4 mt-5 text-center">
      <div className={`card urgency-${urgency}`}>{children}</div>
    </div>
  );
};

const Badge = ({ children, className }) => {
  return (
    <span className={`badge badge-pill badge-danger mt-3 ${className}`}>
      {children}
    </span>
  );
};

const Tile = ({ content, type, title, max, Icon }) => {
  const status = type ?? "success";
  const spanClass = `text-${status}`;
  const spacing = Icon ? " " : "";

  const formatTitle = UtilsNumber.format(title);

  return (
    <p className="lead mb-2">
      <span className={`${spanClass} ${max ? "h3" : "h6"}`}>
        {Icon ? <Icon /> : ""}
        {spacing}
        {formatTitle}
      </span>
      <small className={`${spanClass} h6 d-block`}>{content}</small>
    </p>
  );
};
