function speedDetector(speed) {
    const limit = 70;
    if(speed <= limit)
    return `OK`;
    else if(speed > limit && speed < 135){
        let points = Math.floor((speed - limit)/5);
        return `Points: ${points}`;
    } else {
        return `License expired`;
    }
}

console.log(speedDetector(139));