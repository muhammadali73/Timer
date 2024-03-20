let timerInterval;

function start() {
    clearInterval(timerInterval)
    function timer() {
        document.getElementById("start").disabled = true;
        const now = new Date();
        const hour = now.getHours()
        const minute = now.getMinutes();
        const second = now.getSeconds();
        document.getElementById("hours").innerHTML = `0${hour} :&nbsp;`;
        document.getElementById("minutes").innerHTML = `0${minute} :`;
        document.getElementById("seconds").innerHTML = `0${second}`;
        if (hour > 9) {
            document.getElementById("hours").innerHTML = `${hour} :&nbsp;`
        }
        if (minute > 9) {
            document.getElementById("minutes").innerHTML = `${minute} :`
        }
        if (second > 9) {
            document.getElementById("seconds").innerHTML = `&nbsp;${second}`
        }
    }   
    timerInterval = setInterval(timer, 1000);
    timer();
}
function stop() {
    clearInterval(timerInterval);
    document.getElementById("start").disabled = false;
}
function reset() {
    clearInterval(timerInterval)
    document.getElementById("hours").innerHTML = "00 :&nbsp;";
    document.getElementById("minutes").innerHTML = "00 : ";
    document.getElementById("seconds").innerHTML = " 00";
    document.getElementById("start").disabled = false;
}