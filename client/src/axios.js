import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:${process.env.REACT_APP_PORT || 8000}`,
})

export default instance;