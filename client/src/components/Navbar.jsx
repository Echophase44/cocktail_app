import React from "react";
import '../styles/navbar.css'

function Navbar(props) {
  const { handleSearch } = props
  
  return(
    <header className="navbar_container">
      <nav className="navbar_content">
        <div></div>
        <div className="navbar_rightSide">
          <h1>Enter a liquor :</h1>
          <input type="text" name="search" id="search" onKeyDown={handleSearch}/>
          <a className="navbar_favorites" href="">View Favorites</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar