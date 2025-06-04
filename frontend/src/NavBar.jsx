import React from 'react'
import { Link } from 'react-router-dom'

import {Menu , ChevronUp} from 'lucide-react'

const NavBar = () => {
  const [isOpen , setIsopen] = React.useState(false)
  const [menuState , setMenustate] = React.useState(false)
  // const [isVisible]
  const triggerList = () => {
    setIsopen(prev => !prev)
    setMenustate (prev => !prev)
    console.log(menuState)
  }
  const calcWindowsize = () => {
    console.log(window.innerWidth)
    if(window.innerWidth > 700){
      console.log("Desktop view !!!")
    }
    else{
    console.log("Mobile View !!!")
    }
    // const item = 
    // return item 
    // bg-[#D9D9D9]
  }
  calcWindowsize()
  return (
    <div className="">
    <div className=' flex justify-between  items-center min-h-8 p-2'>
      <h2 className="text-xl font-semibold">Dairy</h2>
      <div className="md:hidden"  onClick={triggerList} >
        { isOpen?
        <ChevronUp />
        :<Menu /> 
}
      </div>
      <div className={`hidden min-h-[20 px]  md:flex text border-blue-700  `}>
      <Link to='/blog' className=' text-[#412722] hover:text-[#f1f0f0] mx-2'>Blogs</Link>
      <Link to='/login' className=' text-[#412722] hover:text-[#f1f0f0] mx-2'>login</Link>
      <Link to='/create' className='text-[#412722] hover:text-[#f1f0f0] mx-2'>Create</Link>
    </div>
    </div>
    
    {menuState ?
    <div className={`min-h-[100px] bg-[#D9D9D9] flex flex-col items-center text absolute w-[100%] md:flex space-x-8  `}>
      <Link to='/blog' className='hover:text-white'>Blogs</Link>
      <Link to='/login' className='hover:text-white'>login</Link>
      <Link to='/contact' className='hover:text-white'>Contact-Us</Link>
    </div> : ''}
    </div>
  )
}

export default NavBar
