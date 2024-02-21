import { useEffect } from "react"
import { useState } from "react"
import GENREDATA from "../configs/JSON/Genredata.json"
import MOVIESDATA from "../configs/JSON/Moviesdata.json"
export const useFetchMovies = (url) => {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     const fetchMovies = async () => {
    //         try {
    //             const result = await fetch(url).then((e) => e.json())

    //             console.log('usefetchmovies',result,url)
    //             setData(() => [{ data: result, error: false }])
    //         }
    //         catch (e) {
    //             console.error("Error white fetching data", e)
    //             setData(() => [{ error: true }])
    //         }
    //     }
    //     fetchMovies()
    // }, [])

    // return { data }
    const dataObj = [{
        data: url.includes("genre") ? GENREDATA : MOVIESDATA,
        error: false
    }]
    return { data: dataObj }
}