function asd(steps,footPrint,speed) {
    let distanceInM = steps * footPrint
    let totalStops = Math.floor(distanceInM / 500)
    console.log(totalStops)
    let speedInMs = speed * (5/18)
    let totalSeconds = (distanceInM / speedInMs) 
    let totalMinutes = 0
    let totalHours = 0
    if (totalSeconds >= 60) {
        totalMinutes = Math.floor(totalSeconds / 60) 
    }
    if (totalSeconds >= 60) {
        totalHours = Math.floor(totalMinutes / 60) 
    }
    
}
asd(4000,0.6,5)