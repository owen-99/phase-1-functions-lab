// Code your solution in this file!

function distanceFromHqInBlocks(location){
    let result;
    if (location >= 42){
        result = location - 42
    } else {
        result = 42 - location
    }
    return result
}


function distanceFromHqInFeet(pickUpLocation) {
    let result;
    if (pickUpLocation >= 42){
        result = ((pickUpLocation - 42)*264)
    } else {
        result = ((42 - pickUpLocation)*264)
    }
    return result
}

    function distanceTravelledInFeet(pickUpLocation, dropOfLocation){
        let result;
        if (pickUpLocation >= dropOfLocation){
            result = ((pickUpLocation - dropOfLocation)*264)
        } else {
            result = ((dropOfLocation - pickUpLocation)*264)
        }
        return result
}  
    
    function calculatesFarePrice(pickUpLocation, dropOfLocation){

            let distanceInFeet = distanceTravelledInFeet(pickUpLocation,dropOfLocation)
            let faresPrice = 0;
            if (distanceInFeet < 400 ){
                return faresPrice = 0;
            } else if (distanceInFeet >= 400 && distanceInFeet < 2000){
                    return faresPrice = (distanceInFeet - 400) * 0.02
            } else if (distanceInFeet >= 2000 && distanceInFeet <=2500){
                return faresPrice = 25
            } else {
                return "cannot travel that far"
            }
 }