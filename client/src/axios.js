import axios from 'axios';

const instance = axios.create({
    baseURL: `https://to-do-list-gpt-backend.vercel.app/`,
})

export default instance;