import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./generateDietContainer.css";

const GenerateDietContainer = (props) => {
  return (
    <div className="generateDietContainer">
      <Link
        className="generateDietLink"
        to="/home/kreator/dzien/poniedzialek?dzien=poniedzialek">
        <button
          disabled={props.isError}
          className="generateDietBtn"
          onClick={() => props.generateDiet()}>
          Generuj diete
        </button>
      </Link>
      <form onSubmit={props.keyPressed}>
        <label htmlFor="kcalAmount">Zakładana liczba kalorii: </label>
        <input ref={props.inputRef} id="kcalAmount" type="number" />
      </form>
    </div>
  );
};

export default GenerateDietContainer;
