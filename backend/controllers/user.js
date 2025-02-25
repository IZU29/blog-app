const createUser = (req ,res) => {
    res.json({msg : 'user has been created'})
}
const getUser = (req ,res) => {
    res.json({msg : 'get this user'})
}

module.exports = {
    createUser,
    getUser
}