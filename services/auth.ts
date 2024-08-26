import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Corrected the URL by removing the extra dot after the port number

export const authenticate = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/token/`, { username, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};
