const models = require('../server/src/models');

const createBlog = async (req, res) => {
    try {
        const blog = await models.Blog.create(req.body);
        return res.status(201).json({
            blog,
        });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    createBlog
}