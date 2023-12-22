import React from "react";
import "./header.css";
import { SUPPORT_LINK } from "../../../settings";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            Covid App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-between ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  {/* By region  */}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {/* By # deaths */}
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                {/* otherss  */}
              </li>
            </ul>
          </div>
          <a
            className="nav-link btn-support"
            href={SUPPORT_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Offrimi una{" "}
            <span className="birra" role="img" aria-label="birra">
              🍺
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
