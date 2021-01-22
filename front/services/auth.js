import axios from "axios";

export const postLogin = async inputs  => {
    const data = new URLSearchParams(inputs);
    const res = await post("/api/login", data);
    if (res.error) {
        return res.error;
    }
    if (res.data && res.data.token) {
        alert(`this is my token: (${res.data.token})`);
        return;
    }
    return "Something unexpected happened!";
};

const baseConfig  = {
    baseURL: "http://localhost:4001",
};

const post = (url, data) => {
    return axios.post(url, data, baseConfig).catch((error) => {
        console.log(error);
    });
};