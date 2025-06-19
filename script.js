let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time");
const yearText = document.getElementById("year");


window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});


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
  timeText.textContent = `${time} GMT+8`;
}

updateTime(); 
setInterval(updateTime, 1000); 


const year = new Date().getFullYear();
yearText.textContent = year;
