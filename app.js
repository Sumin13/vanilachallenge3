var countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();

function countDown() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days +
    "d " +
    hours.toString().padStart(2, "0") +
    "h " +
    minutes.toString().padStart(2, "0") +
    "m " +
    seconds.toString().padStart(2, "0") +
    "s ";
}
countDown();
setInterval(countDown, 1000);
