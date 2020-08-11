const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Hello World'))
router.post('/blogs', controllers.createBlog);

module.exports = router;