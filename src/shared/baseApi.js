import Axios from "axios";

const baseAPI = Axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public'
})

const key = '65fafb75e2e947221eb1e1f007bc775f';

export { baseAPI, key }