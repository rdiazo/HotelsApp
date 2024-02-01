import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"

const useCrud = () => {

const [response, setResponse] = useState()

const baseUrl = 'https://hotels-api.academlo.tech'

    // GET
    const getApi = (path) => {
        const url = `${baseUrl}${path}`
        axios.get(url, getConfigToken())
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }
    // POST
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}`
        axios.post(url, data, getConfigToken())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    // DELETE
    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}`
        axios.delete(url, getConfigToken())
        .then(res => { console.log(res.data)
        setResponse(response.filter(elem => elem.id != id))
    })
        .catch(err => console.log(err))
    }
    // UPFRADE
    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}`
        axios.patch(url, data, getConfigToken())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
    return [ response, getApi, postApi, deleteApi, updateApi ]
}

export default useCrud