import "../index.scss"
import Logo from "./Logo";
import {useState, useEffect, useContext} from "react"
import axios from "axios"
import { LocationContext } from "./Search"

const Main = () => {
  const [data, setData] = useState({})
  
  const location = useContext(LocationContext)

  useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cd321395ee589685dd2f47d6d2558846`
    axios.get(url).then((response)=>{       
        console.log(response.data)
        setData(response.data)
    })
}, data)

  let date = new Date()
  return (
    <div className="Main">
        <Logo></Logo>
        <div className="info">
          <h1>{data.main ? `${data.main.temp.toFixed() - 274}°` : null}</h1>
          <div className="add-info">
              <h3>{data.name}</h3>
              <span>{date.toDateString()}</span>
          </div>
          <div className="img-info">
          <img src="./img/icn1.png" width={100} height={100}></img>
            <span>{data.weather ? <p>{data.weather[0].main}</p> : null}</span>
          </div>
         
        </div>
    </div>
  );
}

export default Main;