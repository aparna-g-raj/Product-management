import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Demoaxios from './components/Demoaxios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>WELCOME TO PRODUCT MANAGEMENT APPLICATION</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Demoaxios/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
    </>
  )
}

export default App