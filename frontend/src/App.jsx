import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Signpage from './Signpage'
import SignIn from './SignIn'
import Blog from './Blog'
function App() {
  const [count, setCount] = useState(0)
  const [sign , setSign] = useState(true)
  const choosePage = () => {
    setSign(prev => !prev)
    
  }
  return (
    
    <>
    <NavBar />
    {/* {
    (sign)?
    <Signpage 
    choosePage = {choosePage}
    />: 
    <SignIn 
    choosePage = {choosePage}/>
    } */}
    <Blog />
    </>
  )
}

export default App
