import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

instance.interceptors.response.use(response => response, error => {
    throw error;
})

function getToken() {
    return localStorage.getItem('accessToken')
}

async function post(url, payload) {

    const response = await axios.post(url, payload, {
        headers: {
            Authorization: getToken(),
            Accept: 'application/json'
        }
    });
    return response;
}

async function get(url, params={}) {

    const response = await axios.get(url, {
        headers: {
            Authorization: getToken(),
            Accept: 'application/json'
        },
        params
    });
    return response;
}

export {post, get}