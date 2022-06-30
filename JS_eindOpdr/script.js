setInterval(setAnalog, 1000);

// const hourHand = document.querySelector('[data-hour-hand]');
// const minuteHand = document.querySelector('[data-minute-hand]');
// const secondHand = document.querySelector('[data-second-hand]');


//Normalcurrent Time Analog Clock
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

function setAnalog() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = ( secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = ( minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setAnalog();


//Timezone Digital Clock




//target each part of TimeZone function to get hours, minutes, seconds, to then place in each hand


//link value options to a switch statement or loop?, then pass this into userTimeSelected


//make a function that grabs value from Select field
function userTimeSelected () {
    let selectedOption = document.getElementById('timeZones');
    selectedOption = selectedOption.value;
    let userSelection = selectedOption;
    return console.log(userSelection);
}



//astablish TimeZone function
function setTimeZone () {

 userTimeSelected() ;


 //use Library for time zones?
//  let timeZoneList = object or array of option from userTimeSelected?
 let timeZone = new Date().toLocaleString('en-US' , {timeZone: timeZoneList} )


}

