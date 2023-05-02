import React from "react";
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Display from "../components/Display"

function Home(props) {
  const { searchResults, handleSearch } = props

  return (
    <>
      <Navbar 
        handleSearch = {handleSearch}
      />
      <div className="home_container">
        <Sidebar />
        <Display 
          searchResults = {searchResults}
        />
      </div>
    </>
  )
}

export default Home