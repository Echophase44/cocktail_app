import React from "react";
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Display from "../components/Display"

function Home(props) {
  const { searchResults, handleSearch, currentQuotes, selectDrink, selectedDrink } = props

  return (
    <>
      <Navbar 
        handleSearch = {handleSearch}
      />
      <div className="home_container">
        <Sidebar 
          selectedDrink = {selectedDrink}
        />
        <Display 
          searchResults = {searchResults}
          currentQuotes = {currentQuotes}
          selectDrink = {selectDrink}
        />
      </div>
    </>
  )
}

export default Home