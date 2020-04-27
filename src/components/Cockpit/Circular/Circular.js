import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./circular.css";

const Circular = () => (
  <div className="circularContainer">
    <h3>Trwa generowanie diety...</h3>
    <CircularProgress color="secondary" />
  </div>
);

export default Circular;
