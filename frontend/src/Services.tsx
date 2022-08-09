import axios from "axios";

const config = axios.create({
    baseURL: 'https://api.coinstats.app/public/v1/coins?skip=0'
})

export const list = () => {
    return config.get("list")
}