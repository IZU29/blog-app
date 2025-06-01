import React , {useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleBlog = () => {
  const [blog , setBlog] = React.useState({})
  const { id } = useParams()

  useEffect(() => {
    const getBlog = async () => {
      const response = await axios.get(`http://localhost:5000/api/${id}`)
      setBlog(response.data.getPost)
    }
    getBlog()
  } ,[]
)
console.log(blog)
  
  return (
    <div className=' w-[90%] flex flex-col m-auto'>
      <h2 className="text-[2.3rem] font-bold my-2">{blog.title}</h2>
      <p className="">{blog.content}</p>
    </div>
  )
}

export default SingleBlog
