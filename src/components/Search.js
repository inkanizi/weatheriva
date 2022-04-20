import { useState } from "react"
import "../index.scss"
import { setDetails, setLoc } from '../redux/actions' 
import { useStore } from "react-redux"

const Search = ({dispatch}) =>{
    const store = useStore()
    const getStore = store.getState()

    const [recent, setRecent] = useState([ "London", "Moscow", "New York", "Berlin"])

    const onKeyDownHandler = event =>{
        if(event.key === 'Enter'){
            dispatch(setLoc(event.target.value))
            dispatch(setDetails({
                param1: "123",
                param2: "321"
            }))
            console.log(getStore)
        }
    }

    return(
         <div className="Search">
            <div className="search-input">
                <input onKeyDown={onKeyDownHandler} placeholder="Another location"/>
            </div>
            <div className="recent-search">
                <ul>
                    <li>{getStore.details.param1}</li>
                    <li>{recent[1]}</li>
                    <li>{recent[2]}</li>
                    <li>{recent[3]}</li>
                </ul>
            </div>
        </div>
    )
}

export default Search