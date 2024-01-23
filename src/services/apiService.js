import axios from "axios";
import { API_BASE_URL } from "../config";

const apiService = {
    passwordGetFR: () => axios.get(`${API_BASE_URL}/api/passwords/1`),
    passwordGetHE: () => axios.get(`${API_BASE_URL}/api/passwords/2`),
    guestsGet: () => axios.get(`${API_BASE_URL}/api/guests?pagination[start]=0&pagination[limit]=350&pagination[withCount]=true`),
    post: (data) => axios.post(`${API_BASE_URL}/api/guests`, { data }),
};

export default apiService;
