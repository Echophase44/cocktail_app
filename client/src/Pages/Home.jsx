import React from "react";
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Display from "../components/Display"

function Home(props) {
  const { searchResults, handleSearch, currentQuotes, selectDrink, selectedDrink, ingredients, instructions, measurements, viewFavorites, toggleFavoritesView, favoriteDrinks } = props

  return (
    <>
      <Navbar 
        handleSearch = {handleSearch}
        toggleFavoritesView = {toggleFavoritesView}
      />
      <div className="home_container">
        <Sidebar 
          selectedDrink = {selectedDrink}
          ingredients = {ingredients}
          measurements = {measurements}
          instructions = {instructions}
        />
        <Display 
          searchResults = {searchResults}
          currentQuotes = {currentQuotes}
          selectDrink = {selectDrink}
          viewFavorites = {viewFavorites}
          favoriteDrinks = {favoriteDrinks}
        />
      </div>
    </>
  )
}

export default Home