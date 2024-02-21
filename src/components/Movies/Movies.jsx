import { useState } from "react"
import { apiKey, apiUrl, genreUrl } from "../../configs"
import { useFetchMovies } from "../../hooks/fetchMovies"
import MovieTableHead from "./MovieTableItems/MovieTableHead"
import MovieTableBody from "./MovieTableItems/MovieTableBody"

const Movies = () => {
    const [sortMovies, setSortMovies] = useState("null")

    const { data } = useFetchMovies(apiUrl + apiKey)

    if (data.length === 0) return <p> Loading</p>
    
    if (data[0].error) return <p>Something went worng please try again</p>

    const moviesData = data[0].data.results || []

    return (<section style={{"margin":"auto"}}>
        <table style={{"margin":"auto"}}>
            <MovieTableHead setSortMovies={setSortMovies} />
            <MovieTableBody moviesData={moviesData}  sortMovies={sortMovies}/>
        </table>

    </section>)
}

export default Movies