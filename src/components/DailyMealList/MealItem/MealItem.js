import React, { useState, useContext } from "react";
import queryString from "query-string";
import styles from "./mealItem.css";
import Modal from "../../Modal/Modal";
import { MealStatesContext } from "../../../store/MealStates";

const MealItem = (props) => {
  let [modalOpen, setModalOpen] = useState(false);
  const { dzien } = queryString.parse(window.location.search);

  let [meal, setMeal] = useContext(MealStatesContext);
  const mealTypeName = props.mealTypeName.toLowerCase();
  const mealNameHandler = (mealSugg) => {
    setMeal((prevState) => ({
      ...prevState,
      [dzien]: { ...prevState[dzien], [mealTypeName]: { ...mealSugg } },
    }));
  };
  const modalHandler = () => {
    setModalOpen((modalOpen = !modalOpen));
  };

  return (
    <li className="mealItem">
      <div className="mealInfoCol">
        <div className="mealTypeName">{props.mealTypeName}</div>
        <div className="mealName">{meal[dzien][mealTypeName].nazwa}</div>
        <div className="mealKcal">{meal[dzien][mealTypeName].kcal} kcal</div>
        <div className="mealWeight">
          Łączna waga porcji: {meal[dzien][mealTypeName].waga}
        </div>
        <ul className="mealNutrientsList">
          <li className="mealNutrient">
            B: {meal[dzien][mealTypeName].wartosci.b}
          </li>
          <li className="mealNutrient">
            T: {meal[dzien][mealTypeName].wartosci.t}
          </li>
          <li className="mealNutrient">
            W: {meal[dzien][mealTypeName].wartosci.w}
          </li>
        </ul>
        <button className="openModalBtn" onClick={modalHandler}>
          Wybierz posiłek
        </button>
        {modalOpen ? (
          <Modal
            setModalOpen={modalHandler}
            mealsData={props.mealsData}
            mealTypeName={props.mealTypeName}
            mealNameHandler={mealNameHandler}
          />
        ) : null}
      </div>
      <div className="mealInfoCol">
        <p>Składniki do posiłku:</p>
        <ol className="mealIngredients">
          {Object.entries(meal[dzien][mealTypeName].skladniki).map(
            (element, index) => (
              <li key={index}>{element.join(" ")}</li>
            )
          )}
        </ol>
      </div>
    </li>
  );
};

export default MealItem;
