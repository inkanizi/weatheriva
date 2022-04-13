import "../index.scss"
import Logo from "./Logo";
import {useState, useEffect} from "react"
import searchLocation from "../receivingData.js"

const Main = () => {
  const [data, setData] = useState({})
  

  useEffect(()=>{
    setData(searchLocation("London"))
}, data)

  return (
    <div className="Main">
        <Logo></Logo>
        <div className="info">
          <h1>26°</h1>
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