function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;

    if (speed <= speedLImit) {
        console.log ("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

        if (demeritPoints <= maxDemeritPoints) {
            console.log(`Points: ${demeritPoints}`);
        }else {
            console.log("License Suspended");
        }
    }
}