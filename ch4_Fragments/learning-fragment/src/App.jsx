import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // let emptyMessage = foodItems.length === 0 ? <h3>I am Still Hungry</h3> : null;

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>

      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </React.Fragment>
  );
}

export default App;
