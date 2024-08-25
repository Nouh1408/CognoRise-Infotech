function start(){
const countdown = document.getElementById("countdown-el")
const target = new Date(countdown.value).getTime()

if(isNaN(target)){
    alert("Enter a valid date and time")
    return;
}


    const interval = setInterval(function() {
    const now = new Date().getTime()
    const difference = target - now

    if(difference<0){
        clearInterval(interval)
        document.getElementById("timer").innerHTML = "Countdown ended"
        return;
    }
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        document.getElementById("days").textContent = days
        document.getElementById("hours").textContent = hours
        document.getElementById("minutes").textContent = minutes
        document.getElementById("seconds").textContent = seconds
    }, 1000)
}
