var count = new Date("06 october 2021 12:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = count - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("counter-days-left").innerHTML = days;
    document.getElementById("counter-hours-left").innerHTML = hours;
    document.getElementById("counter-minutes-left").innerHTML = minutes;
    document.getElementById("counter-seconds-left").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counter-circles").style.display = "none";
        document.getElementById("expired").innerHTML = "COMING SOON...";
    }
}, 1000);
