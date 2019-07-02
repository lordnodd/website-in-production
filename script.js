var countdown = document.querySelector('.countdown');

var launchDate = new Date('Aug 15, 2019 00:00:00').getTime();

// Update every second
var intvl = setInterval(function() {
  
  var now = new Date().getTime();
  // Distance from now and the launch date (ms)
  var distance = launchDate - now;

  // Time calculation
  var days = Math.floor(distance/(1000 * 60 * 60 * 24));
  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var mins = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60) / 1000));
  
  countdown.innerHTML=''+
      '<div class="time days"><span>'+days+'</span> Days</div> ' +
      '<div class="time hours"><span>'+hours+'</span> Hours</div> ' +
      '<div class="time minutes"><span>'+mins+'</span> Minutes</div> ' +
      '<div class="time seconds"><span>'+seconds + '</span> Seconds</div> ';

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#aaa';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);