import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Signpage from './Signpage'
import SignIn from './SignIn'
import Blog from './Blog'
import SingleBlog from './SingleBlog'
function App() {
  const [count, setCount] = useState(0)
  const [sign , setSign] = useState(true)
  const choosePage = () => {
    setSign(prev => !prev)
    
  }
  return (
    
    // <Router>
    // <>
    // <NavBar />
    // {/* {
    // (sign)?
    // <Signpage 
    // choosePage = {choosePage}
    // />:
    // <SignIn 
    // choosePage = {choosePage}/>
    // } */}
    // <Blog />
    // <SingleBlog />
    // </>
    // <Routes>
    // <Route path="/" element={<Home />} />
    // <Route path="/about" element={<About />} />
    // </Routes>
    // </Router>
    <>
    <NavBar />
    <Router>
    <Routes>
    <Route path="/blog" element={<Blog />} />
    <Route path="/single" element={<SingleBlog/>} />
    <Route path="/login" element={<SignIn/>} />
    <Route path="/register" element={<Signpage />} />
  
    </Routes>
    </Router>
    </>
  )
}

export default App
