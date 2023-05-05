import React from "react";
import { useState } from "react";
import '../styles/sidebar.css'

function Sidebar(props) {
  const { selectedDrink } = props

  console.log(selectedDrink)

  for (const property in selectedDrink){
    if(property.match(/strIngredient[1-9]|1[0-5]/g) && typeof selectedDrink[property] === "string")
    console.log(selectedDrink[property])
  }

  // const selectedIngredients = selectedDrink

  return(
    <section className="sidebar_container">
      <h2>Offical Cocktails</h2>
      <p>Search through thousands of premium cocktails.</p>
      <button className="sidebar_button">Ingredients</button>
      <button className="sidebar_button">Instructions</button>
      <p>All drinks listed here are supplied by the cocktailDB/api</p>
    </section>
  )
}

export default Sidebar