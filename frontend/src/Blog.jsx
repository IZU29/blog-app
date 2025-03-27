import React from 'react'

const Blog = () => {
let text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quos impedit, optio quas, aliquid voluptatibus sit a quaerat amet soluta fuga iusto est distinctio maxime dolorum maiores? Molestias quos, modi quae repudiandae neque facilis vitae aut voluptas fugiat iusto id ratione eaque assumenda consectetur architecto suscipit minus eum. Dolorem, mollitia!"
let maxLength = 150
  return (
    <div className=' w-[90%] m-auto flex flex-col'>
        <div className="flex flex-col">
        <input type="text" name="" id="" className="rounded-[200px] my-4 bg-[#e3e3e3] p-2 w-[90%] self-center" placeholder='Search Blog Post'/>
        </div>
        <div className="grid grid-cols-1 gap-4">
            <div className="border border-grey my-2 w-[85%] m-auto rounded-lg p-2">
                <h2 className="text-2xl font-semibold truncate ">Lorem, ipsum dolor.</h2>
                <h3 className="text-[#0500FF]">Lorem.</h3>
                <p className="">{text.length > maxLength? text.substring(0 ,maxLength) + '...': text}</p>
            </div>
            <div className="border border-gray my-2 w-[85%] m-auto rounded-lg p-2"><h2 className="text-2xl font-semibold truncate ">Lorem, ipsum dolor.</h2>
                <h3 className="text-[#0500FF]">Lorem.</h3>
                <p className="">{text.length > maxLength? text.substring(0 ,maxLength) + '...': text}</p></div>
            <div className="border border-gray my-2 w-[85%] m-auto rounded-lg p-2"><h2 className="text-2xl font-semibold truncate ">Lorem, ipsum dolor.</h2>
                <h3 className="text-[#0500FF]">Lorem.</h3>
                <p className="">{text.length > maxLength? text.substring(0 ,maxLength) + '...': text}</p></div>
        </div>
    </div>
  )
}

export default Blog
