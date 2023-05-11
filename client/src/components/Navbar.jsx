import React from "react";
import  shaker from '../assets/shaker.png'
import '../styles/navbar.css'

function Navbar(props) {
  const { handleSearch, toggleFavoritesView, viewFavorites } = props

  console.log(viewFavorites)
  
  return(
    <header className="navbar_container">
      <nav className="navbar_content">
        <img className="navbar_logo" src={shaker} alt="Drink shaker" />
        <div className="navbar_search">
          <h1>Search for a drink :</h1>
          <input type="text" name="search" id="search" onKeyDown={handleSearch}/>
        </div>
        {!viewFavorites.viewState && <button className="navbar_favorites" onClick={() => toggleFavoritesView()}>View Favorites</button>}
        {viewFavorites.viewState && <button className="navbar_viewSearches" onClick={() => toggleFavoritesView()}>View Searches</button>}
      </nav>
    </header>
  )
}

export default Navbar