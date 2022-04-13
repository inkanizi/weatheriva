import { useState } from "react"
import "../index.scss"

const Search = () =>{

    const [recent, setRecent] = useState([ "London", "Moscow", "New York", "Berlin"])

    return(
        <div className="Search">
            <div className="search-input">
                <input placeholder="Another location"/>
                <button><a href="#"><img src="./img/icons8-поиск-30.png"/></a></button>
            </div>
            <div className="recent-search">
                <ul>
                    <li>{recent[0]}</li>
                    <li>{recent[1]}</li>
                    <li>{recent[2]}</li>
                    <li>{recent[3]}</li>
                </ul>
            </div>
        </div>
    )
}

export default Search