import axios from 'axios';

const baseUrl = process.env.NODE_ENV == 'production' ? 'https://post-tree-api.herokuapp.com/' : 'http://localhost:3000'
// const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

// ========================================
// ================ AUTH ==================
// ========================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return null;
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// ========================================
// ================ avatars ===============
// ========================================
export const getAllAvatars = async () => {
  const resp = await api.get('/avatars');
  return resp.data;
}

// ========================================
// ================ comments ===============
// ========================================

export const getAllComments = async (postid) => {
  const resp = await api.get(`/posts/${postid}/comments`);
  return resp.data;
}

export const destroyComment = async (postid, commentid) => {
  const resp = await api.delete(`/posts/${postid}/comments/${commentid}`);
  return resp;
}

// ========================================
// ================ posts =================
// ========================================

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
}
// Gets all posts belonging to a specific user
export const getAllUsersPosts = async id => {
  const resp = await api.get(`/users/${id}/posts`);
  return resp.data;
}

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
}

export const postPost = async (postData) => {
  const resp = await api.post('/posts', postData);
  return resp.data;
}

export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, postData);
  return resp.data;
}

export const destroyPost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp;
}

// ========================================
// ========= posts and comments ============
// ========================================

export const addComment = async (commentData) => {
  const resp = await api.post(`/posts/${commentData.post_id}/comments`, commentData);
  return resp.data;
}

export const patchComment = async (text, postId, commentId) => {
  const resp = await api.put(`/posts/${postId}/comments/${commentId}`, text);
  return resp.data;
}

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp;
}

