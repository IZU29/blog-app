import React from 'react'
// border border-red-500 
const Signpage = ({choosePage}) => {
  return (
    <div className="flex flex-col min-h-[100vh]  w-[90%] m-auto">
    <div className=''>
      <h2 className="self-center text-center  border-b-black w-[100%] mt-24 font-bold">Sign-Up</h2>
    </div>
    <div className="flex flex-col">
    <label htmlFor="" className="">Name:</label>
    <input type="text" name="" id="" className="bg-[#e3e3e3] rounded-lg border border-black placeholder-black pl-4 my-4"placeholder='Enter Your Name ' />
    </div>
    <div className="flex flex-col">
    <label htmlFor="" className="">Email:</label>
    <input type="text" name="" id="" className="bg-[#e3e3e3] rounded-lg border border-black placeholder-black pl-4 my-4" placeholder='Enter Your Email'/>
    </div>
    <div className="flex flex-col">
    <label htmlFor="" className="">Password:</label>
    <input type="text" name="" id="" className="bg-[#e3e3e3] rounded-lg border border-black placeholder-black pl-4 my-4" placeholder='Enter Your Password'/>
    </div>
    <button className="bg-[#9DA1F1] w-[30%] self-center p-2 rounded-[200px] font-bold">Sign-Up</button>
    <p className="font-semibold self-center">Already have an account ? <span className="text-[#0029FF]" onClick={choosePage}>Sign-in</span></p>
    </div>
  )
}

export default Signpage
