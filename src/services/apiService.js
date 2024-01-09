import axios from "axios";
import { API_BASE_URL } from "../config";

const apiService = {
    passwordGet: () => axios.get(`${API_BASE_URL}/api/passwords/1`),
    guestsGet: () => axios.get(`${API_BASE_URL}/api/guests`),
    post: (data) => axios.post(`${API_BASE_URL}/api/guests`, { data }),
};

export default apiService;
