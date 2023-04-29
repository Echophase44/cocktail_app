import { useState, useEffect } from 'react'

import './App.css'
import Home from './Pages/Home'


function App() {
  const [searchResults, setSearchResults] = useState({})

  

  return (
    <>
      <Home
        searchResults = {searchResults}
      />
    </>
  )
}

export default App
