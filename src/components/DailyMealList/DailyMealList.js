import React, { Component } from "react";
import styles from "./dailyMealList.css";
import MealItem from "./MealItem/MealItem";
import DaySummary from "./DaySummary/DaySummary";
import queryString from "query-string";

class DailyMealList extends Component {
  constructor() {
    super();
    this.mealTypeName = ["Sniadanie", "Obiad", "Podwieczorek", "Kolacja"];
    this.state = {
      isData: false,
    };
    this.data = null;
    this.name = queryString.parse(window.location.search);
  }

  componentDidMount() {
    this.data = this.props.mealsData;
    this.setState({ isData: true });
  }

  componentDidUpdate() {
    this.name = queryString.parse(window.location.search);
  }

  render() {
    if (this.state.isData) {
      return (
        <React.Fragment>
          <ul className="mealsList">
            {this.mealTypeName.map((el, index) => {
              this.rand = Math.random() * 10;
              return (
                <MealItem
                  key={`${this.name.dzien}-${index}`}
                  mealsData={this.data}
                  mealTypeName={el}
                  modalToggle={this.props.modalToggle}
                />
              );
            })}
            <DaySummary />
          </ul>
        </React.Fragment>
      );
    } else return null;
  }
}

export default DailyMealList;
