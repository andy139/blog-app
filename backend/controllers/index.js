const models = require('../server/src/models');



const createBlog = async (req, res) => {
    try {
        const blog = await models.Blog.create(req.body);
        console.log(req.body)
        return res.status(201).json({
            blog,
        });
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}



const getAllBlogs = async (req, res) => {
    try {
        const blogs = await models.Blog.findAll({
            include: [
                {
                    model: models.Comment,
                    as: 'comments'
                },
            ]
        });

        // console.log(blogs)

        return res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await models.Blog.findOne({
            where: { id: blogId },
            include: [
                {
                    model: models.Comment,
                    as: 'comments',
                }
            ]
        });
        if (blog) {
            return res.status(200).json({ blog });
        }
        return res.status(404).send('Blog with ID does not exist')

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const deleteBlog = async (req, res) => {
    try {
        const { blogId } = req.params;
        const deleted = await models.Blog.destroy({
            where: { id: blogId }
        });
        if (deleted) {
            return res.status(204).send("Blog deleted");
        }
        throw new Error("Blog not found");
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const createComment = async (req, res) => {
    try {
        const comment = await models.Comment.create(req.body);
        console.log(req.body)
        return res.status(201).json({
            comment,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    deleteBlog,
    createComment,
}


