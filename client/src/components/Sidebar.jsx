import React from "react";
import '../styles/sidebar.css'

function Sidebar(props) {
  const { selectedDrink, ingredients, instructions, measurements } = props

  console.log(measurements)

  const currentIngredients = ingredients.map((element, index) => (
    <span>{element}</span>    
  ))

  const currentMeasurements = measurements.map((element, index) => (
    <span>{element}</span>
  ))

  return(
    <section className="sidebar_container">
      <h2>Offical Cocktails</h2>
      <p>Search through thousands of premium cocktails.</p>
      <button className="sidebar_button">Ingredients</button>
        <div>
          {currentIngredients}
          {currentMeasurements}
        </div>
      <button className="sidebar_button">Instructions</button>
      <p>All drinks listed here are supplied by the cocktailDB/api</p>
    </section>
  )
}

export default Sidebar