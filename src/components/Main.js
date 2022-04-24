import "../index.scss"
import Logo from "./Logo";
import { useState, useEffect } from "react"
import axios from "axios"
import {setDetails, setLoc} from "../redux/actions"
import { useDispatch } from "react-redux";

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

  const getRequest = async () =>{
    const url = await `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cd321395ee589685dd2f47d6d2558846`
    await axios.get(url).then((response)=>{       
      setData(response.data)
      dispatch(setDetails({
        humidity: response.data.main ? response.data.main.humidity : null,
        cloudy: response.data.main ? response.data.clouds.all : null,
        wind: response.data.main ? response.data.wind.speed : null,
        rain: response.data.rain ? Object.values(response.data.rain)[0] : 0,
        description: response.data.weather[0] ? response.data.weather[0].description : null
      }))
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
          <div className="img-info">
          <h1>{data.main ? `${data.main.temp.toFixed() - 274}°` : null}</h1>
          <span>{data.weather ? <p>{data.weather[0].main}</p> : null}</span> 
          </div>
          
          <div className="add-info">
              <h3>{data.name}</h3>
              <span>{date.toDateString()}</span>
          </div>
          
        </div>
    </div>
  );
}

export default Main;