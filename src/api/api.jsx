import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8080/api/v1" });

export const getAllPosts = async () => {
  const response = await api.get("posts");
  return response.data;
};

export const getOnePost = async (id) => {
  const response = await api.get(`posts/${id}`);
  return response.data;
};

export const getOnePostWithComments = async (id) => {
  const response = await axios.all([getOnePost(id), getAllCommentsOfPost(id)]);
  const [post, comments] = response;
  return { post, comments };
};

export const deleteOnePost = async (id) => {
  await api.delete(`posts/${id}`);
};

export const createPost = async (data) => {
  const response = await api.post("posts", data);
  return response.data;
};

export const updatePost = async (id, data) => {
  const response = await api.put(`posts/${id}`, data);
  return response.data;
};

export const getAllCommentsOfPost = async (postId) => {
  const response = await api.get(`posts/${postId}/comments`);
  return response.data;
};

export default api;
