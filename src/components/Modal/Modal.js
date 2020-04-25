import React from 'react';
import MealSuggestionItem from './MealSuggestionItem/MealSuggestionItem'
import styles from './modal.css';

const Modal = (props) => (
    <div id="modal" className="modal">
        <ul className="mealsSuggestionsList">
            <li><button id="exitModal" className="exitModal" onClick={props.setModalOpen}>X</button></li>
            {props.mealsData[props.mealTypeName.toLowerCase()].posilki.map((el,index)=>{
                return <MealSuggestionItem key={index} mealsData={props.mealsData} mealToShow={props.mealsData[props.mealTypeName.toLowerCase()].posilki[index]} mealTypeName={props.mealTypeName} setModalOpen={props.setModalOpen} mealNameHandler={props.mealNameHandler}/>
            })}
        </ul>
    </div>
)

export default Modal;