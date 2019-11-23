function setTime(){
const now = new Date()
const seconds = ((now.getSeconds()/60) * 360) +90
const minutes = ((now.getMinutes()/60) * 360) +90
const hour = ((now.getHours()/12) * 360) +90

const second_hand = document.getElementById('second')
second_hand.style.transform = `rotate(${seconds}deg)`
const minute_hand = document.getElementById('min')
minute_hand.style.transform = `rotate(${minutes}deg)`
const hour_hand = document.getElementById('hour')
hour_hand.style.transform = `rotate(${hour}deg)`

document.getElementById('text').innerHTML = now
}
setInterval(setTime, 1000)