function updateClock() {
  const timeElement = document.getElementById("time");
  const periodElement = document.getElementById("period");

  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = "AM";

  if (hours >= 12) {
    period = "PM";
    hours = hours > 12 ? hours - 12 : hours;
  } else if (hours === 0) {
    hours = 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
  // periodElement.innerHTML = period;
}

setInterval(updateClock, 500);
updateClock(); // Initial call to set the time immediately
