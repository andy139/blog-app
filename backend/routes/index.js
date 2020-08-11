const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", (req, res) => res.send("Hello World"));
router.post("/blogs", controllers.createBlog);
router.get("/blogs", controllers.getAllBlogs);
router.delete("blogs/:blogId", controllers.deleteBlog);
router.get("/blogs/:blogId", controllers.getBlogById);

router.post("/comments", controllers.createComment);

module.exports = router;
