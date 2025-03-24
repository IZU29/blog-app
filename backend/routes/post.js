const Express = require('express')
const router = Express.Router()
const { getAllPost,getSinglePost,createPost } = require('../controllers/post')

router.route('/').get(getAllPost).post(createPost)
router.route('/:id').get(getSinglePost)

module.exports = router