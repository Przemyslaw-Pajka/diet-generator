import React, { useContext } from "react";
import queryString from "query-string";
import styles from "./daySummary.css";
import { MealStatesContext } from "../../../store/MealStates";

const DaySummary = (props) => {
  let [meal, setMeal] = useContext(MealStatesContext);
  const { dzien } = queryString.parse(window.location.search);
  let summaryDay = {
    kcal: 0,
    wartosci: {
      b: 0,
      t: 0,
      w: 0,
    },
  };
  Object.entries(meal[dzien]).map((el) => {
    summaryDay.kcal += el[1].kcal;
    summaryDay.wartosci.b += el[1].wartosci.b;
    summaryDay.wartosci.t += el[1].wartosci.t;
    summaryDay.wartosci.w += el[1].wartosci.w;
  });

  return (
    <div className="daySummary">
      <div className="daySummaryCol">
        <div className="daySummaryTitle">Podsumowanie</div>
        <div className="daySummaryKcal">
          Łącznie kalorii: {summaryDay.kcal} kcal
        </div>
        <button className="printBtn" onClick={() => window.print()}>
          Drukuj jadłospis dnia
        </button>
      </div>
      <div className="daySummaryCol">
        <ul className="nutrientsList">
          <div className="daySummaryTitle">Wartości odżywcze</div>
          <li>Białko: {summaryDay.wartosci.b.toFixed(1)} g</li>
          <li>Tłuszcz: {summaryDay.wartosci.t.toFixed(1)} g</li>
          <li>Węglowodany: {summaryDay.wartosci.w.toFixed(1)} g</li>
        </ul>
      </div>
    </div>
  );
};

export default DaySummary;
