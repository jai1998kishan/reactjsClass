import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";

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
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>
          Above is the lsit of healthy foods that are good for your health and
          well being
        </p>
      </Container>
    </>
  );
}

export default App;
