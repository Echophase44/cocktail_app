import React from 'react'
import shaker from '../assets/shaker.png'
import '../styles/display.css'

function Display(props) {
  const { searchResults } = props


  return (
    <section className='display_main'>
    {!Object.is(searchResults, {}) && <div className='display_empty'>
      <img src={shaker} alt="Drink shaker" />
      <p>Search for a drink to see results.</p>
    </div> }
    </section>
  )
}

export default Display