let name =prompt("Enter your name: ")
let visitor = document.querySelector("#myName")
visitor.innerHTML=`${name}`
var days = ["","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

   
function time(){
    let dateData = new Date()
    let hours = dateData.getHours()
    let minutes=dateData.getMinutes()
    let seconds=dateData.getSeconds()
    
    let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
    let dayName = days[dateData.getDay()]



    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    let info =document.querySelector("#myClock")
    info.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`
    
}
setInterval(time,1000);//Saatimizin anlık olarak güncellenmessini sağlıyor.
    