import axios from "axios"

const searchLocation = (loc) =>{
    let loc1 = loc
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc1}&appid=cd321395ee589685dd2f47d6d2558846`
    let data
    axios.get(url).then((response)=>{
        console.log(response.data)
        data = response.data
    })
    return data

    // let response = fetch('https://api.gismeteo.net/v2/search/cities/?lang=en&query=москва', {
    //     headers:{
    //         "X-Gismeteo-Token": "56b30cb255.3443075",
    //         "Accept-Encoding": "deflate"
    //     }
    // }).then((response) =>{
    //     console.log(response.data)
    // })

}


export default searchLocation