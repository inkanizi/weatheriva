import { useState, createContext } from "react"
import "../index.scss"

export const LocationContext = createContext()

const Search = () =>{
    const [location, setLoc] = useState('')
    const [recent, setRecent] = useState([ "London", "Moscow", "New York", "Berlin"])

    
    const onKeyDownHandler = event =>{
        if(event.key === 'Enter'){
            setLoc(event.target.value)
            console.log(location)
        }
        
    }

    return(
        <LocationContext.Provider value={location}>
            <div className="Search">
                <div className="search-input">
                    <input onKeyDown={onKeyDownHandler} placeholder="Another location"/>
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
        </LocationContext.Provider>
    )
}

export default Search