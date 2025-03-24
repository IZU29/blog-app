const post = require('../model/post')

const getAllPost = async (req ,res) => {
    const getPost = await post.find({})
    res.status(200).json({getPost})
}
const createPost = async (req ,res) => {
    const { title , author , content } = req.body
    // const postBody = {  }
    const postBody = await post.create({title , author, content})
    res.status(200).json(postBody)
    console.log("Message Was Sent !!!")
}
const getSinglePost = async (req ,res) => {
    try{
        const getPost = await post.find({})
        res.status(200).json({getPost})
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getAllPost,
    createPost,
    getSinglePost
}