import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems = [];
  let foodItems = [
    "Sabzi",
    "Green Vegetable",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
    "Fruits",
  ];

  // let emptyMessage = foodItems.length === 0 ? <h3>I am Still Hungry</h3> : null;

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>

      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </React.Fragment>
  );
}

export default App;
