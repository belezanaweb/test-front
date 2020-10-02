import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = "http://www.mocky.io/v2/5b15c4923100004a006f3c07"

export const useRequestData = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(baseUrl)
            .then(res => setData(res.data))
            .catch(err => window.alert(err))
    }, [])

    return (data)
}