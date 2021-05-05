const clockContatiner = document.querySelector(".js-clock");
const clockTitle = clockContatiner.querySelector("h1");

function getTime(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours < 10){
        hours = `0${hours}`;
    }
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(seconds < 10){
        seconds = `0${seconds}`;
    }


    clockTitle.innerText = `${hours} : ${minutes} : ${seconds}`;

}
    

function init(){
    getTime();

    setInterval(getTime, 1000);
    console.dir(clockTitle);
    
}

init();