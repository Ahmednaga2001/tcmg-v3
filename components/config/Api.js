import axios from "axios";

const Api = axios.create({
    baseURL:"https://tcmg-alpha.vercel.app",
    headers:{
        "Content-Type" : "application/json",
    },
})
export default Api;