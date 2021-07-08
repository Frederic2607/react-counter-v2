import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon className="stopwatch" icon="stopwatch" size="4x" />
      <h1>React Counter v2</h1>
    </div>
  );
};

export default Header;
