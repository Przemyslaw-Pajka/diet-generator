import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import {
  DaysBar,
  DailyMealList,
  Error404,
  WrongUrl,
  Circular,
  GenerateDietContainer,
} from "../index.js";

const Routes = (props) => (
  <Switch>
    {props.isKeyPressed ? (
      <Redirect to="/home/kreator/dzien/poniedzialek?dzien=poniedzialek" />
    ) : null}
    <Route path="/home">
      <React.Fragment>
        {props.isGenerating ? <Circular /> : null}
        <GenerateDietContainer
          isError={props.isError}
          generateDiet={props.generateDietHandler}
          keyPressed={props.keyPressed}
          inputRef={props.input}
        />

        <DaysBar />
        <Switch>
          {props.isError ? (
            <Error404 />
          ) : (
            <Route
              path="/home/kreator/dzien"
              component={() => <DailyMealList mealsData={props.data} />}
            />
          )}

          <Route path="/home/*" component={WrongUrl} />
          <Route path="/home/kreator/*" component={WrongUrl} />
        </Switch>
      </React.Fragment>
    </Route>
    <Route path="*" component={WrongUrl} />
  </Switch>
);
export default Routes;
