// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const apiService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBuses = () => apiService.get('/buses');
export const getBus = (id) => apiService.get(`/buses/${id}`);
export const createBus = (busData) => apiService.post('/buses', busData);
export const updateBus = (id, busData) => apiService.put(`/buses/${id}`, busData);
export const deleteBus = (id) => apiService.delete(`/buses/${id}`);