import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex-row justifySpaceBetween">
      <h1>C/E</h1>
      <ul className="flex-row headerElementsList">
        <Link className="headerElementLink" to="/">
          <li className="headerElement">Campaigns</li>
        </Link>
        <Link className="headerElementLink" to="/employees">
          <li className="headerElement">Employees</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
