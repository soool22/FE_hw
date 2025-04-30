const openhour = 9;
const closehour = 22;

function updatestatus() {
  const now = new Date();
  const opentime = new Date();
  opentime.setHours(openhour, 0, 0, 0);
  const closetime = new Date();
  closetime.setHours(closehour, 0, 0, 0);
  const status = document.getElementById("status");
  const countdown = document.getElementById("countdown");

  if (now < opentime) {
    status.textContent = "오픈까지 남은 시간:";
    showcountdown(opentime - now);
  } else if (now >= opentime && now <= closetime) {
    status.textContent = "마감까지 남은 시간:";
    showcountdown(closetime - now);
  } else {
    status.textContent = "오늘 영업 마감감";
    countdown.textContent = "";
  }
}

function showcountdown(ms) {
  const totalseconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalseconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalseconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalseconds % 60).padStart(2, "0");
  document.getElementById(
    "countdown"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

updatestatus();
setInterval(updatestatus, 1000);
