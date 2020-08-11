import { getBlogs, getBlogById, createBlog } from "../util/blog_api_util";

export const RECEIVE_BLOGS = "RECEIVE_BLOGS";
export const RECEIVE_BLOG = "RECEIVE_BLOG";
export const RECEIVE_NEW_BLOG = "RECEIVE_NEW_BLOG";

export const receiveBlogs = blogs => ({
  type: RECEIVE_BLOGS,
  blogs
});

export const receiveBlog = blog => ({
  type: RECEIVE_BLOG,
  blog
});

export const receiveNewBlog = blog => ({
  type: RECEIVE_NEW_BLOG,
  blog
});

export const fetchBlogs = () => dispatch =>
  getBlogs()
    .then(blogs => dispatch(receiveBlogs(blogs)))
    .catch(err => console.log(err));

export const fetchBlog = id => dispatch =>
  getBlogById(id)
    .then(blog => dispatch(receiveBlog(blog)))
    .catch(err => console.log(err));

export const composeBlog = data => dispatch =>
  createBlog(data)
    .then(blog => dispatch(receiveNewBlog(blog)))
    .catch(err => console.log(err));
