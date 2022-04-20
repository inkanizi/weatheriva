export const SET_LOCATION = 'SET_LOCATION'
export const SET_DETAILS = 'SET_DETAILS'

export function setLoc(location){
    return{
        type: SET_LOCATION,
        location
    }
}

export function setDetails(details){
    return{
        type: SET_DETAILS,
        details
    }
}