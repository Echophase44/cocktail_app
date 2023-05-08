import React from "react";
import '../styles/sidebar.css'

function Sidebar(props) {
  const { ingredients, instructions, measurements } = props

  console.log(instructions)
  const currentIngredients = ingredients.map((element, index) => (
    <span className="sidebar_ingredient">{element}</span>    
  ))

  const currentMeasurements = measurements.map((element, index) => (
    <span className="sidebar_measurement">{element}</span>
  ))

  const currentInstructions = instructions.map((element, index) => (
    <span>{index + 1}. {element}</span>
  ))

  return(
    <section className="sidebar_container">
      <h2>Offical Cocktails</h2>
      <p>Search through thousands of premium cocktails.</p>
      <button className="sidebar_button">Ingredients</button>
        <div className="sidebar_ingredientsContainer">
          <div className="sidebar_ingredientsWrapper">
            {currentIngredients}
          </div>
          <div className="sidebar_measurementsWrapper">
            {currentMeasurements}
          </div>
        </div>
      <button className="sidebar_button">Instructions</button>
        <div className="sidebar_instructionsContainer">
          {currentInstructions}
        </div>
      <p className="sidebar_note">All listed drinks are supplied by the CocktailDB API.</p>
    </section>
  )
}

export default Sidebar