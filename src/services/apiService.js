import axios from "axios";
import { API_BASE_URL } from "../config";

const apiService = {
    passwordGetFR: () => axios.get(`${API_BASE_URL}/api/passwords/1`),
    passwordGetHE: () => axios.get(`${API_BASE_URL}/api/passwords/2`),
    guestsGet: async (start, limit) => {
        const response = await axios.get(`${API_BASE_URL}/api/guests`, {
            params: {
                'pagination[start]': start,
                'pagination[limit]': limit,
                'pagination[withCount]': true
            }
        });
    
        return response.data;
    },
    post: (data) => axios.post(`${API_BASE_URL}/api/guests`, { data }),
};

export default apiService;
