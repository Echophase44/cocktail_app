import React from "react";
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Display from "../components/Display"

function Home(props) {
  const { searchResults, handleSearch, currentQuotes } = props

  return (
    <>
      <Navbar 
        handleSearch = {handleSearch}
      />
      <div className="home_container">
        <Sidebar />
        <Display 
          searchResults = {searchResults}
          currentQuotes = {currentQuotes}
        />
      </div>
    </>
  )
}

export default Home