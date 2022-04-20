import "../index.scss"
import Logo from "./Logo";
import { useState, useEffect } from "react"
import axios from "axios"
import {setLoc} from "../redux/actions"
import { useDispatch, useStore } from "react-redux";

const Main = ({location}) => {
  const [data, setData] = useState({})
  const [firstLoc, setFirstLoc] = useState("")
  const dispatch = useDispatch()

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=cd321395ee589685dd2f47d6d2558846`
      axios.get(url2).then((response)=>{
        setFirstLoc(response.data.name)
        })
      });
      if(location !== firstLoc){
        dispatch(setLoc(firstLoc))
      }
  }, [firstLoc])
    
  // const store = useStore()
  // const getStore = store.getState()
  // console.log(getStore.location);

  const getRequest = async () =>{
    const url = await `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cd321395ee589685dd2f47d6d2558846`
    await axios.get(url).then((response)=>{       
      setData(response.data)
    })
  } 

  useEffect(()=>{
    getRequest()
  }, [location])

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