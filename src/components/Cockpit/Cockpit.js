import React, { useState, useEffect, useContext, useRef } from "react";
import styles from "./cockpit.css";
import { MealStatesContext } from "../../store/MealStates";
import generateDiet from "../../modules/generateDiet/generateDiet";
import getMealsData from "../../modules/getMealsData/getMealsData";
import Routes from "../Routes/Routes";

const Cockpit = () => {
  let numbersSuggestedMeals = {};
  const mealsData = getMealsData;
  let input = useRef("kcalAmount");
  const mealTypeName = ["sniadanie", "obiad", "podwieczorek", "kolacja"];
  let [meal, setMeal] = useContext(MealStatesContext);
  let [data, setData] = useState(false);
  let [mealsCount, setMealsCount] = useState(false);
  let [isGenerating, setIsGenerating] = useState(false);
  let [isKeyPressed, setIsKeyPressed] = useState(false);
  let [isError, setIsError] = useState(false);

  useEffect(() => {
    mealsData()
      .then((data) => {
        setData((data = data));
        mealTypeName.map((element) => {
          numbersSuggestedMeals = {
            ...numbersSuggestedMeals,
            [element]: data[element].posilki.length,
          };
        });
        setMealsCount(numbersSuggestedMeals);
      })
      .catch((error) => {
        setIsError(true);
        throw new Error(error);
      });
  }, []);

  useEffect(() => {
    setIsKeyPressed(false);
  });

  const generateDietHandler = () => {
    generateDiet(
      input,
      setIsGenerating,
      isGenerating,
      mealsCount,
      data,
      setMeal
    );
  };
  let keyPressed = (event) => {
    event.preventDefault();
    setIsKeyPressed(true);
    generateDietHandler();
  };

  return (
    <main className="cockpit">
      <Routes
        keyPressed={keyPressed}
        generateDietHandler={generateDietHandler}
        isKeyPressed={isKeyPressed}
        isGenerating={isGenerating}
        isError={isError}
        input={input}
        data={data}
      />
    </main>
  );
};

export default Cockpit;
