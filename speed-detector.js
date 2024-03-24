function carSpeed(speed) {
    //assign variables
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    //make logical comparison and outputs the statements//
    if(speed<=speedLimit){
        console.log("OK");
    } else{
        //calculates the demerit points based on the speed limit//
        const points =Math.ceil((speed-speedLimit) /kmPerDemeritPoint);
        if (points>=12){
            console.log("Licence suspended");
        } else{
            console.log("Points: " + points);
        }
    }
}
carSpeed("")