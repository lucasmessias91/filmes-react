import axios from "axios"
import { languages } from "eslint-plugin-prettier"
 const api = axios.create({ 
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "19f45697a27ec2a485a7669c2d214909",
        language: "pt-BR",
        page: 1
    }
 })

 export default api