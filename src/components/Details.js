import react from "react"

const Details = () =>{
    return(
        <div className="Details">
            <h2>Weather Details</h2>
            <div className="details-list">
                <div className="details-item">
                    <p>Cloudy</p>
                    <span>86%</span>
                </div>
                <div className="details-item">
                    <p>Humidity</p>
                    <span>62%</span>
                </div>
                <div className="details-item">
                    <p>Wind</p>
                    <span>8km/h</span>
                </div>
                <div className="details-item">
                    <p>Rain</p>
                    <span>8mm</span>
                </div>
            </div>
        </div>
    )
}

export default Details