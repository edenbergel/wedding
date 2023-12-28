import axios from "axios";
import { API_BASE_URL } from "../config";

const apiService = {
    get: () => axios.get(`${API_BASE_URL}/api/passwords/1`),
    post: (data) => axios.post(`${API_BASE_URL}/api/guests`, { data }),
};

export default apiService;
