import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

function App() {
  const[category, setcategory]=useState("general")
  const[country, setcountry]=useState("in")

  return (
    <div className="">
      <Navbar setcategory={setcategory}  setcountry={setcountry}/>
      <NewsBoard category ={category} country={country}/>
    </div>
  )
}

export default App
