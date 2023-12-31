let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let date = setInterval(() => {
    let date = new Date();

    let hour_clock = date.getHours();
    hour.innerHTML = hour_clock;

    let minute_clock = date.getMinutes();
    minute.innerHTML = minute_clock;
    
    let second_clock = date.getSeconds();
    second.innerHTML = second_clock;

    if(minute_clock <= 9){
        minute.innerHTML = "0" + minute_clock;
    }

    if(second_clock <= 9){
        minute.innerHTML = "0" + minute_clock;
    }

}, 1000)