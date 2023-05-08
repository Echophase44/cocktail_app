import { useState, useEffect } from 'react'
import quotesData from './API/quoteData'
import './App.css'
import Home from './Pages/Home'


function App() {
  const [searchParam, setSearchParam] = useState("")
  const [searchResults, setSearchResults] = useState({})
  const [currentQuotes, setCurrentQuotes] = useState({})
  const [selectedDrink, setSelectedDrink] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [measurements, setMeasurements] = useState([])
  const [instructions, setInstructions] = useState([])

  function handleSearch(e) {
    if(e.key === "Enter") {
      setSearchParam(e.target.value)
    }
  }

  useEffect(() => {
    if(searchParam === ""){
      return
    }

    if(searchResults.drinks?.length >= 1){
      let collection = []
      for(let i = 0; i < searchResults.drinks.length; i++){
        let selection = Math.floor(Math.random() * 50)
         collection.push(quotesData.quotes[selection])
      }
        setCurrentQuotes(collection)
      } else {
      return
    }    
  },[searchResults]);

  useEffect(() => {
    if(searchParam === ""){
      return
    }

    let drinkType = searchParam.trim().replace(" ", "_")
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkType}`)
      .then((res) => res.json())
      .then((data)=> {
        setSearchResults(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [searchParam])

  useEffect(() => {
    if(Object.keys(selectedDrink).length === 0){
      return
    }
    loadIngredients()
    loadMeasurements()
    loadInstructions()
  }, [selectedDrink])

  function loadIngredients() {
    const stagingIngredients = []
    
    for (const property in selectedDrink){   
      if(property.match(/strIngredient[1-9]|1[0-5]/g) && typeof selectedDrink[property] === "string"){
        stagingIngredients.push(selectedDrink[property])
      }
    }
    setIngredients(stagingIngredients)
  }

  function loadMeasurements(){
    const stagingMeasurements = []

    for (const property in selectedDrink){
      if (property.match(/strMeasure[1-9]|1[0-5]/g) && typeof selectedDrink[property] === "string"){
        stagingMeasurements.push(selectedDrink[property])
      }
    }
    setMeasurements(stagingMeasurements)
  }

  function loadInstructions() {
    setInstructions(selectedDrink.strInstructions.split(". "))    
  }

  function selectDrink(index){
    setSelectedDrink(searchResults.drinks[index])
  }

  return (
    <>
      <Home
        searchResults = {searchResults}
        handleSearch = {handleSearch}
        currentQuotes = {currentQuotes}
        selectDrink = {selectDrink}
        selectedDrink = {selectedDrink}
        ingredients = {ingredients}
        measurements = {measurements}
        instructions = {instructions}
      />
    </>
  )
}

export default App
