const start = document.getElementById("start");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");

const work_minutes = document.getElementById("w_minutes");
const work_seconds = document.getElementById("w_seconds");

const break_minutes = document.getElementById("b_minutes");
const break_seconds = document.getElementById("b_seconds");

//

let startTimer;

start.addEventListener("click", () => {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
    ding();
    start.disabled = true;
  } else {
    alert("Timer is already running");
  }
});

reset.addEventListener("click", () => {
  work_minutes.innerText = 25;
  work_seconds.innerText = "00";

  break_minutes.innerText = 5;
  break_seconds.innerText = "00";

  document.getElementById("counter").innerText = 0;
  stopInterval();
  startTimer = undefined;
  start.disabled = false;
});

stop.addEventListener("click", () => {
  stopInterval();
  startTimer = undefined;
  start.disabled = false;
});

function timer() {
  // Work timer countdown
  if (work_seconds.innerText != 0) {
    work_seconds.innerText--;
  } else if (work_minutes.innerText != 0 && work_seconds.innerText == 0) {
    work_seconds.innerText = 59;
    work_minutes.innerText--;
  }

  // BREAK timer countdown

  if (work_minutes.innerText == 0 && work_seconds.innerText == 0) {
    if (break_seconds.innerText != 0) {
      break_seconds.innerText--;
    } else if (break_minutes.innerText != 0 && break_seconds.innerText == 0) {
      break_seconds.innerText = 59;
      break_minutes.innerText--;
    }
  }

  if (break_minutes.innerText == 0 && break_seconds.innerText == 0) {
    ding();
  }

  // Increment +1 if completed
  if (
    work_minutes.innerText == 0 &&
    work_seconds.innerText == 0 &&
    break_minutes.innerText == 0 &&
    break_seconds.innerText == 0
  ) {
    work_minutes.innerText = 25;
    work_seconds.innerText = "00";

    break_minutes.innerText = 5;
    break_seconds.innerText = "00";

    document.getElementById("counter").innerText++;
  }
}

// Stop timer function

function stopInterval() {
  clearInterval(startTimer);
}

// Bell ring

function ding() {
  var sound = new Audio("bell-ring.mp3");
  sound.play();
}

document.getElementsByTagName("button")[0].addEventListener("click", ding);
