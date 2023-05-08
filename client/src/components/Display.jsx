import React from 'react'
import shaker from '../assets/shaker.png'
import '../styles/display.css'

function Display(props) {
  const { searchResults, currentQuotes, selectDrink } = props

    const drinkImages = searchResults.drinks?.map((element, index) => (
      <div key={index} className='display_cardContainer' onClick={() => selectDrink(index)}>
        <img className="display_cardDrinkImage" src={element.strDrinkThumb} alt="Drink in a glass" />
        <div className='display_filler'></div>
        <p className='display_drinkName'><strong>{element.strDrink}</strong></p>
        <p className='display_cardQuote'>{currentQuotes[index]?.quote} <em>-{currentQuotes[index]?.author}</em></p>
      </div>
    ))

  return (
    <section className='display_main'>
      
      {Object.keys(searchResults).length === 0 && <div className='display_empty'>
        <img src={shaker} alt="Drink shaker" />
        <p>Search for a drink to see results.</p>
      </div> }

      {searchResults.drinks?.length >= 1 && <div className='display_allCards'>
        {drinkImages}
      </div>}
      
      {searchResults.drinks === null && <div className='display_noResults'> 
      <p>No results found!</p>
      <p>Try searching for something else!</p>
      </div>}
    
    </section>
  )
}

export default Display