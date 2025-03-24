const post = require('../model/post')

const getAllPost = async (req ,res) => {
    try{
    const getPost = await post.find({})
    res.status(200).json({getPost})
    }
    catch(error){
    console.log(error)
    }
}

const createPost = async (req ,res) => {
    try{
    const { title , author , content } = req.body
    // const postBody = {  }
    const postBody = await post.create({title , author, content})
    res.status(200).json(postBody)
    console.log("Message Was Sent !!!")
    }
    catch(error){
    console.log(error)
    }
}

const getSinglePost = async (req ,res) => {
    try{
        const userId = req.params.id
        console.log(typeof userId)
        const getPost = await post.findOne({ _id : userId })
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