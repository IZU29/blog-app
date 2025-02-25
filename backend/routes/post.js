const Express = require('express')
const router = Express.Router()
const { getallPost,getSinglePost,createPost } = require('../controllers/post')

router.route('/').get(getallPost).post(createPost)
router.route('/:id').get(getSinglePost)

module.exports = router