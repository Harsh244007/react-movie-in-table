import { memo } from "react"
import { apiKey, genreUrl } from "../../../configs"
import { useFetchMovies } from "../../../hooks/fetchMovies"
import { MoviesDataType } from "../Movies";
type GenresType = {
    id: number;
    name: string
}


const MovieTableBody = ({ moviesData, sortMovies = 'null' }: { moviesData: MoviesDataType[], sortMovies: string }) => {

    const { data: gendres } = useFetchMovies(genreUrl + apiKey)
    if (gendres.length === 0) return <p> Loading</p>
    if (gendres[0].error) return <p>Something went worng please try again</p>

    // @ts-ignore
    const genreData: GenresType[] = gendres[0].data.genres

    const sortingCondition = (a: MoviesDataType, b: MoviesDataType) => sortMovies === 'null' ? 0 : a.title.toLowerCase() < b.title.toLowerCase() ? sortMovies === "asc" ? -1 : 1 : sortMovies === "asc" ? 1 : -1

    return (<tbody>
        {moviesData.sort(sortingCondition).map((item) => {
            return (
                <tr key={item.id}><td>{item.title}</td> <td>{item.vote_count}</td> <td>{item.vote_average}</td>

                    <td>{genreData.map((genresItem) => {
                        let genreSt = ""
                        item.genre_ids.map((childGenreIds) => {
                            if (childGenreIds === genresItem.id)
                                genreSt += genresItem.name + "/"
                        })
                        return genreSt

                    })}</td>
                </tr>
            )
        })}

    </tbody>)
}

export default memo(MovieTableBody)