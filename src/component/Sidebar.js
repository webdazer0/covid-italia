import React from "react";
import useCountries from "../hooks/useCountries";
import { FlagIcon } from "./icons/icons";

function Sidebar({ col }) {
  const { info } = useCountries();
  const classColumn = `col-md-${col} d-none d-md-block`;
  return (
    <div className={classColumn}>
      <div className="card text-center">
        <div className="card-header">
          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            <h4 className="h1 mb-0">Mondo</h4>
          </div>
        </div>
        <div className="card-body pt-5">
          <h3 className="h3 mb-5">Situazione nel mondo:</h3>

          <p className="lead mb-5">
            <span className="text-danger h1">
              <FlagIcon /> {info.deaths}
            </span>
            <span className="h5 d-block">Morti</span>
          </p>
          <p className="lead mb-5">
            <span className="text-warning h1">{info.confirmed}</span>
            <br />
            <span className="h5 d-block">Casi confermati</span>
          </p>
          <p className="lead mb-5">
            <span className="text-success h1">{info.recovered}</span>
            <br />
            <span className="h5 d-block">Casi recoverati</span>
          </p>
          <div className="over-50k"></div>
        </div>
        <div className="card-footer">
          <small>aggiornato</small>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
