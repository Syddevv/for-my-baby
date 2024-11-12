// Set the start date we're counting from
const startDate = new Date("2021-04-09T00:00:00").getTime();

function updateElapsedTime() {
  const now = new Date().getTime();
  const timeElapsed = now - startDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Update the elapsed time every second
setInterval(updateElapsedTime, 1000);
