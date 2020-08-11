import axios from "axios";

export const getBlogs = () => {
  return axios.get(`/api/blogs`);
};

export const getBlogById = id => {
  return axios.get(`/api/blogs/${id}`);
};

export const createBlog = data => {
  return axios.post(`/api/blogs`, data);
};
