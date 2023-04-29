import React from "react";
import '../styles/sidebar.css'

function Sidebar(props) {
  return(
    <section className="sidebar_container">
      <h2>Offical Cocktails</h2>
      <p>Search through thousands of premium cocktails.</p>
      <button className="sidebar_button">Ingredients</button>
      <button className="sidebar_button">Instructions</button>
      <p>All drinks listed here are supplied by the cocktailDB/api</p>
    </section>
  )
}

export default Sidebar