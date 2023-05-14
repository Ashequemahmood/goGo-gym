import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav/Nav'
import Prices from './Components/Prices/Prices'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Prices></Prices>
    </>
  )
}

export default App
