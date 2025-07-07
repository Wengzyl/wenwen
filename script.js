function login(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "wenwen" && pass === "1234") {
    document.getElementById("loginOverlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Incorrect username or password.");
  }
}

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header?.classList.add("hidden");
  } else {
    header?.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const timeText = document.querySelector(".time");

function updateTime() {
  const now = new Date();
  const options = {
    timeZone: "Asia/Manila",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };
  const time = now.toLocaleTimeString("en-US", options);
  if (timeText) {
    timeText.textContent = `${time} GMT+8`;
  }
}

updateTime();
setInterval(updateTime, 1000);

const yearText = document.getElementById("year");
const year = new Date().getFullYear();
if (yearText) {
  yearText.textContent = year;
}
