var countDownDate = new Date("Aug 27, 2025 10:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + " Hari " + hours + " Jam " + minutes + " Menit " + seconds + " Detik";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Acara Sedang Berlangsung";
  }
}, 1000);
