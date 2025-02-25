const getallPost = async (req ,res) => {
    res.json({msg : 'This has started to work !!!'})
}
const createPost = async (req ,res) => {
    res.json({msg : 'creating new post!!!'})
}
const getSinglePost = async (req ,res) => {
    res.json({msg : 'get single post'})
}

module.exports = {
    getallPost,
    createPost,
    getSinglePost
}