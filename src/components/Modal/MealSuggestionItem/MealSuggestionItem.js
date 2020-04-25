import React from 'react'

const MealSuggestionItem = (props) => {
    return (
        <li className="mealSuggestion">
            <div className="mealSuggestionName">{props.mealToShow.nazwa}</div>
            <ul className="mealSuggestionsNutrientsList">
                <li className="mealSuggestionsNutrient">({props.mealToShow.kcal} kcal)</li>
                <li className="mealSuggestionsNutrient">B: {props.mealToShow.wartosci.b}</li>
                <li className="mealSuggestionsNutrient">T: {props.mealToShow.wartosci.t}</li>
                <li className="mealSuggestionsNutrient">W: {props.mealToShow.wartosci.w}</li>
            </ul>
            <button className="selectMealBtn" onClick={() => {props.setModalOpen(); props.mealNameHandler(props.mealToShow) }}>Wybierz</button>
        </li>
    )
};

export default MealSuggestionItem;