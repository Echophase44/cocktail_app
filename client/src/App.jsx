import { useState, useEffect } from 'react'
import quotesData from './API/quoteData'
import './App.css'
import Home from './Pages/Home'


function App() {
  const [searchParam, setSearchParam] = useState("")
  const [searchResults, setSearchResults] = useState({})
  const [currentQuotes, setCurrentQuotes] = useState({})

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
        let selection = Math.floor(Math.random() * 51)
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

  return (
    <>
      <Home
        searchResults = {searchResults}
        handleSearch = {handleSearch}
        currentQuotes ={currentQuotes}
      />
    </>
  )
}

export default App
