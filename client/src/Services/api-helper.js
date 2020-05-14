import axios from 'axios';

const baseUrl = 'http://localhost:3000';

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
// ================ flavors ===============
// ========================================

export const getAllFlavors = async () => {
  const resp = await api.get('/flavors');
  return resp.data;
}

// ========================================
// ================ foods =================
// ========================================

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
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
// ========= foods and Flavors ============
// ========================================

export const addFlavor = async (flavorId, foodId) => {
  const resp = await api.get(`/flavors/${flavorId}/foods/${foodId}`)
  return resp.data;
}
