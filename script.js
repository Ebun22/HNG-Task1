console.log("connected")

function currentTime() {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const currentTime = new Date();
    const day = currentTime.getDay()
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes() ;
    const HTMLDayOfTheWeek = document.getElementById('day')
    const HTMLTime = document.getElementById('time')
    // const HTMLMeridiem = document.getElementByClassName('meridiem')
    console.log(HTMLDayOfTheWeek )
    let meridiem
    if(hour >= 12){
        meridiem = "PM"
    }else{
        meridiem = "AM"
    }

    const time = `${hour > 12 ? hour - 12 : hour}:${minute < 10 ? "0" + minute : minute } ${meridiem}`
    HTMLTime.textContent = time;
    HTMLDayOfTheWeek.textContent = daysOfTheWeek[day]
   
}

currentTime();
setInterval(currentTime, 1000)