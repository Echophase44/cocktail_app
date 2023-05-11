import React, { useState } from "react";
import arrow from '../assets/chevron.png'
import '../styles/sidebar.css'
import '../styles/sidebarMobile.css'

function Sidebar(props) {
  const { ingredients, instructions, measurements } = props
  const [ panels, setPanels ]= useState({ingredientsPanel: true, instructionsPanel: true, mobileMenu: true})


  const currentIngredients = ingredients.map((element, index) => (
    <li key={index} className="sidebar_ingredient">{element}</li>    
  ))

  const currentMeasurements = measurements.map((element, index) => (
    <li key={index} className="sidebar_measurement">{element}</li>
  ))

  const currentInstructions = instructions.map((element, index) => (
    <span key={index}>{index + 1}. {element}</span>
  ))

  function toggleIngredientsView(){
    setPanels(prevPanels => ({
      ...prevPanels,
      ingredientsPanel: !prevPanels.ingredientsPanel
    }))
  }

  function toggleInstructionsView() {
    setPanels(prevPanels => ({
      ...prevPanels,
      instructionsPanel: !prevPanels.instructionsPanel
    }))
  }

  function toggleMobileSidebar(){
    setPanels(prevPanels => ({
      ...prevPanels,
      mobileMenu: !prevPanels.mobileMenu
    }))
  }

  return(
    <section className={"sidebar_container"+ (panels.mobileMenu ? " open" : " closed")}>
      <div className="sidebar_titleWrapper">
        <h2>Offical Cocktails</h2>
        <button className={"sidebar_mobileBtn" + (panels.mobileMenu ? " open" : "")} onClick={toggleMobileSidebar}><img className="sidebar_mobileBtnImg" src={arrow} alt="" /></button>
      </div>
      <p>Search through thousands of premium cocktails.</p>
      <button className={"sidebar_button" + (panels.ingredientsPanel ? " open" : "")} onClick={toggleIngredientsView}><strong>Ingredients</strong></button>
        <div className="sidebar_ingredientsContainer">
          <ul className={"sidebar_ingredientsWrapper" + (panels.ingredientsPanel ? " open" : "")}>
            {ingredients.length === 0 && <li>No drink selected.</li>}
            {currentIngredients}
          </ul>
          <ul className={"sidebar_measurementsWrapper" + (panels.ingredientsPanel ? " open" : "")}>
            {currentMeasurements}
          </ul>
        </div>
      <button className={"sidebar_button" + (panels.instructionsPanel ? " open" : "")} onClick={toggleInstructionsView}><strong>Instructions</strong></button>
        <div className={"sidebar_instructionsContainer" + (panels.instructionsPanel ? " open" : "")}>
          {instructions.length === 0 && <span>No drink selected.</span>}
          {currentInstructions}
        </div>
      <p className="sidebar_note">All listed drinks are supplied by the CocktailDB API.</p>
    </section>
  )
}

export default Sidebar