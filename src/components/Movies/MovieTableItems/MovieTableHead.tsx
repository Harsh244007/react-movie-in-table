import { Dispatch, SetStateAction, memo } from "react"

const MovieTableHead = ({ setSortMovies }:{setSortMovies:Dispatch<SetStateAction<string>>}) => {
    const handleTitleSort = () => {
        setSortMovies((prev) => prev == "des" ? "asc" : "des")
    }
    return (<thead>
        <tr>
            <th><button style={{ color: "black", padding: "4px 8px", border: "0px" }} onClick={handleTitleSort}>Title</button></th>
            <th>Votes average</th>
            <th>Total votes</th>
            <th>Genres</th>
        </tr>
    </thead>)
}

export default memo(MovieTableHead)