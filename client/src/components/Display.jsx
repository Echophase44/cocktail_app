import React from 'react'
import shaker from '../assets/shaker.png'
import '../styles/display.css'

function Display(props) {
  const { searchResults } = props

    const drinkImages = searchResults.drinks?.map((element, index) => (
      <div key={index} className='display_cardContainer'>
        <img className="display_cardDrinkImage" src={element.strDrinkThumb} alt="" />
        <p>This is quite the image!</p>
      </div>
    ))

  return (
    <section className='display_main'>
    {/* {Object.keys(searchResults).length === 0 && <div className='display_empty'>
      <img src={shaker} alt="Drink shaker" />
      <p>Search for a drink to see results.</p>
    </div> } */}
    <div className='display_allCards'>
      {drinkImages}
    </div>
    
    </section>
  )
}

export default Display