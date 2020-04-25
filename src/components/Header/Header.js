import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.css";

const Header = () => (
  <header>
    <Link to="/home">
      <h1>Kreator Diety</h1>
      <h2>Stwórz swoją dietę</h2>
      <h3>Projekt niekomercyjny</h3>
    </Link>
  </header>
);

export default Header;
