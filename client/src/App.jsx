import { useState, useEffect } from 'react'

import './App.css'
import Home from './Pages/Home'


function App() {
  const [searchParam, setSearchParam] = useState("")
  const [searchResults, setSearchResults] = useState({})

  function handleSearch(e) {
    if(e.key === "Enter") {
      setSearchParam(e.target.value)
    }
  }

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
      />
    </>
  )
}

export default App
