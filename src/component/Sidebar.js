import React from "react";
import useFetch from "../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ col }) {
  const { allDeaths, allConfirmed, allRecovered } = useFetch();
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
              {" "}
              <FontAwesomeIcon icon={faFlag} /> {allDeaths}
            </span>
            <br />
            <span className="h5">Morti</span>
          </p>
          <p className="lead mb-5">
            <span className="text-warning h1">{allConfirmed}</span>
            <br />
            <span className="h5">Casi confermati</span>
          </p>
          <p className="lead mb-5">
            <span className="text-success h1">{allRecovered}</span>
            <br />
            <span className="h5">Casi recoverati</span>
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
