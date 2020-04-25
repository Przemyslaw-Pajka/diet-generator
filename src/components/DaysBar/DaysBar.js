import React from "react";
import styles from "./daysbar.css";
import { NavLink } from "react-router-dom";

const DaysBar = () => {
  const dayName = [
    "poniedzialek",
    "wtorek",
    "sroda",
    "czwartek",
    "piatek",
    "sobota",
    "niedziela",
  ];
  const polishDayName = [
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piatek",
    "Sobota",
    "Niedziela",
  ];

  return (
    <React.Fragment>
      <ul className="daysbar">
        {dayName.map((element, index) => {
          return (
            <li key={index}>
              <NavLink
                key={index}
                to={{
                  pathname: `/home/kreator/dzien/${element}`,
                  search: `dzien=${element}`,
                }}>
                {polishDayName[index]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default DaysBar;
