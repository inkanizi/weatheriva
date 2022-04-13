import "../index.scss"
import Logo from "./Logo";
import {useState, useEffect} from "react"
import searchLocation from "../receivingData.js"
import axios from "axios"

const Main = () => {
  const [data, setData] = useState()
  

  useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=cd321395ee589685dd2f47d6d2558846`
    axios.get(url).then((response)=>{       
        console.log(response.data)
        setData(response.data)
    })
}, data)

  return (
    <div className="Main">
        <Logo></Logo>
        <div className="info">
        {/* {data.main ? <h1>{data.main.temp.toFixed()}°</h1> : null} */}
          <h1>23°</h1>
          <div className="add-info">
              <h3>London</h3>
              <span>12:34 - Sunday, 13 Apr `21</span>
          </div>
          <img src="./img/icn1.png" width={100} height={100}></img>
        </div>
    </div>
  );
}

export default Main;