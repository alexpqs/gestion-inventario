import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia la URL según la configuración del backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;