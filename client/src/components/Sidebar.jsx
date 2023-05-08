import React, { useState } from "react";
import '../styles/sidebar.css'

function Sidebar(props) {
  const [panels, setPanels]= useState({ingredientsPanel: false, measurementsPanel: false})

  console.log(panels.ingredientsPanel)

  const { ingredients, instructions, measurements } = props

  const currentIngredients = ingredients.map((element) => (
    <li className="sidebar_ingredient">{element}</li>    
  ))

  const currentMeasurements = measurements.map((element) => (
    <li className="sidebar_measurement">{element}</li>
  ))

  const currentInstructions = instructions.map((element, index) => (
    <span>{index + 1}. {element}</span>
  ))

  function toggleIngredientsView(){
    setPanels(prevPanels => ({
      ...prevPanels,
      ingredientsPanel: !prevPanels.ingredientsPanel
    }))
  }

  return(
    <section className={"sidebar_container" + (panels.ingredientsPanel ? " open" : "")}>
      <h2>Offical Cocktails</h2>
      <p>Search through thousands of premium cocktails.</p>
      <button className={"sidebar_button" + (panels.ingredientsPanel ? " open" : "")} onClick={toggleIngredientsView}>Ingredients</button>
        <div className="sidebar_ingredientsContainer">
          <ul className={"sidebar_ingredientsWrapper"}
            >
            {currentIngredients}
          </ul>
          <ul className="sidebar_measurementsWrapper">
            {currentMeasurements}
          </ul>
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