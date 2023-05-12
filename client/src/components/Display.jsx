import React from 'react'
import { useState } from 'react'
import shaker from '../assets/shaker.png'
import emptyMark from '../assets/bookmark-empty.png'
import filledMark from '../assets/bookmark-filled.png'
import '../styles/display.css'

function Display(props) {
  const { searchResults, currentQuotes, selectDrink, viewFavorites, favoriteDrinks, addToFavorites, removeFromFavorites } = props

  const [selectedDrink, setSelectedDrink] = useState("")

  function addBorder(newId){
    setSelectedDrink(newId)
  }

    const drinkImages = searchResults.drinks?.map((element, index) => (
      <div key={index} 
      className={'display_cardContainer' + (selectedDrink === element.idDrink ? " selected" : "")} 
      onClick={() => {selectDrink(index); addBorder(element.idDrink)}}>
        <img className="display_cardDrinkImage" src={element.strDrinkThumb} alt="Drink in a glass" />
        {!favoriteDrinks.includes(element) && <button onClick={() => addToFavorites(element)} className='display_bookmarkBtn'><img className='display_bookmark' src={emptyMark} alt="" /></button>}
        {favoriteDrinks.includes(element) && <button onClick={() => removeFromFavorites(element)} className='display_bookmarkBtn'><img className='display_bookmark' src={filledMark} alt="" /></button>}
        <div className='display_filler'></div>
        <p className='display_drinkName'><strong>{element.strDrink}</strong></p>
        <p className='display_cardQuote'>{currentQuotes[index]?.quote} <em>-{currentQuotes[index]?.author}</em></p>
      </div>
    ))

    const favoritesCollection = favoriteDrinks.map((element, index) => (
      <div key={index} 
      className={'display_cardContainer' + (selectedDrink === element.idDrink ? " selected" : "")} 
      onClick={() => {selectDrink(index); addBorder(element.idDrink)}}>
        <img className="display_cardDrinkImage" src={element.strDrinkThumb} alt="Drink in a glass" />
        {!favoriteDrinks.includes(element) && <button onClick={() => addToFavorites(element)} className='display_bookmarkBtn'><img className='display_bookmark' src={emptyMark} alt="" /></button>}
        {favoriteDrinks.includes(element) && <button onClick={() => removeFromFavorites(element)} className='display_bookmarkBtn'><img className='display_bookmark' src={filledMark} alt="" /></button>}
        <div className='display_filler'></div>
        <p className='display_drinkName'><strong>{element.strDrink}</strong></p>
        <p className='display_cardQuote'>{currentQuotes[index]?.quote} <em>-{currentQuotes[index]?.author}</em></p>
      </div>
    ))

  return (<>
    {!viewFavorites.viewState && <section className='display_main'>
      
      {Object.keys(searchResults).length === 0 && <div className='display_empty'>
        <img src={shaker} alt="Drink shaker" />
        <p>Search for a drink to get started.</p>
      </div> }
      
      {searchResults.drinks?.length >= 1 && <div className='display_allCards'>
        {drinkImages}
      </div>}
      
      {searchResults.drinks === null && <div className='display_empty dark'>
      <img src={shaker} alt="Drink shaker" /> 
      <p>No results found!</p>
      </div>}
    
    </section>}

    {viewFavorites.viewState && 
      <section className='display_main'>
        {favoriteDrinks.length === 0 && <div className='display_empty dark'>
          <img src={shaker} alt="Drink shaker"/> 
          <p>No favorites in your collection.</p>
        </div>}

        {favoriteDrinks.length > 0 && 
          <div className='display_allCards'>
            {favoritesCollection}
          </div>
        }
      </section>}
    </>
  )
}

export default Display