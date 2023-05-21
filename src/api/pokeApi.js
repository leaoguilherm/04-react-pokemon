import axios from "axios"
import { api } from "./index"


export const getApi = async () => {
    const response = await api.get('/pokemon?limit=30')

    return response
}

export const getPokemon = async (url) => {
    const response = await axios.get(url)

    return response
}