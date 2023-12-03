import React from "react";
// @fortawesome
import { faFlag, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PersonIcon() {
  return <FontAwesomeIcon icon={faUserTimes} />;
}

export function FlagIcon() {
  return <FontAwesomeIcon icon={faFlag} />;
}
