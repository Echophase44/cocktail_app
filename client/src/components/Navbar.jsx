import React from "react";
import  shaker from '../assets/shaker.png'
import '../styles/navbar.css'

function Navbar(props) {
  const { handleSearch, toggleFavoritesView } = props
  
  return(
    <header className="navbar_container">
      <nav className="navbar_content">
        <img className="navbar_logo" src={shaker} alt="Drink shaker" />
        <div className="navbar_rightSide">
          <h1>Search for a drink :</h1>
          <input type="text" name="search" id="search" onKeyDown={handleSearch}/>
          <button className="navbar_favorites" onClick={() => toggleFavoritesView()}>View Favorites</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar