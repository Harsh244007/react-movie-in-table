import { memo } from "react"

const MovieTableHead = ({setSortMovies=()=>{}}) => {
    const handleTitleSort = () => {
        setSortMovies((prev) => prev == "des" ? "asc" : "des")
    }
    return (<thead>
        <tr>
            <th><button onClick={handleTitleSort}>Title</button></th>
            <th>Votes average</th>
            <th>Total votes</th>
            <th>Genres</th>
        </tr>
    </thead>)
}

export default memo(MovieTableHead)