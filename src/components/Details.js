import react from "react"
import { useStore } from "react-redux"

const Details = ({details}) =>{
    return(
        <div className="Details">
            <h2>Weather Details</h2>
            <div className="details-list">
                <div className="details-item">
                    <p>Cloudy</p>
                    <span>{details.cloudy}%</span>
                </div>
                <div className="details-item">
                    <p>Humidity</p>
                    <span>{details.humidity}%</span>
                </div>
                <div className="details-item">
                    <p>Wind</p>
                    <span>{details.wind}km/h</span>
                </div>
                <div className="details-item">
                    <p>Rain</p>
                    <span>{details.rain}mm</span>
                </div>
            </div>
        </div>
    )
}

export default Details