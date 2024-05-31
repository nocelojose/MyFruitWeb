import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getFruits = () => {
    return axios.get(`${API_BASE_URL}/fruits`);
};

export const calculateTotalPrice = (fruit, quantity) => {
    return axios.post(`${API_BASE_URL}/calculate`, { fruit, quantity });
};
