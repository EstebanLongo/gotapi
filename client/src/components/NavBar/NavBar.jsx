import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
  return (
    <div>
      <ul className="navbarhome">
        <li className="listitemsnavbar">
          <Link to="/characters" className="linknav">
            CHARACTERS
          </Link>
        </li>
        <li className="listitemsnavbar">
          <Link to="/character/create" className="linknav">
            CREATE
          </Link>
        </li>
      </ul>
    </div>
  );
}
