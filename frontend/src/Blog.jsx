import React from 'react'
import axios from 'axios'
import { Link , useNavigate } from 'react-router-dom'
const Blog = () => {
  let maxLength = 150
  const [blogPost , setblogPost] = React.useState([]) 
  const navigate = useNavigate()
  React.useEffect( () => {
    const BlogList = async () => {
      const response  =  await axios.get("http://localhost:5000/api")
      setblogPost(response.data.getPost)
      console.log(blogPost)
    }
    BlogList()
  },  [])
  console.log(blogPost)
  const selectBlog = (id) =>{
    console.log(id)
    navigate(`/single/${id}`)
  }
  return (
    <div className=' w-[90%] m-auto flex flex-col'>
        <div className="flex flex-col">
        <input type="text" name="" id="" className="rounded-[200px] my-4 bg-[#e3e3e3] p-2 w-[90%] self-center" placeholder='Search Blog Post'/>
        </div>
        <div className="grid grid-cols-1 gap-4">
       {
        blogPost.map((blog) => (
          <div className="border border-grey my-2 w-[85%] m-auto rounded-lg p-2" key={blog._id} onClick={() => selectBlog(blog._id)}>
        <h2 className="text-2xl font-semibold truncate ">{blog.title}</h2>
        <h3 className="text-[#0500FF]">{blog.author}</h3>
        <p className="">{blog.content.length > maxLength? blog.content.substring(0 ,maxLength) + '...': blog.content}</p>
      </div>
        )
      )
    }
    </div>
    </div> 
  )
}

export default Blog
