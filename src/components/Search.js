import { useState } from "react"
import "../index.scss"
import { setLoc } from '../redux/actions' 

const Search = ({dispatch}) =>{
    const [recent, setRecent] = useState(["Moscow", "Sochi", "Krasnoarmeysk", "Dubai"])

    const onKeyDownHandler = event =>{
        if(event.key === 'Enter'){
            dispatch(setLoc(event.target.value))
            recent[3] = recent[2]
            recent[2] = recent[1]
            recent[1] = recent[0]
            recent[0] = event.target.value

            event.target.value = " "
        }
    }

    return(
         <div className="Search">
            <div className="search-input">
                <input onKeyDown={onKeyDownHandler} placeholder="Another location"/>
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