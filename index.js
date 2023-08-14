const startButton = document.querySelector("#screen1 button");
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");



startButton.onclick = () => {
    screen1.style.display = "none";
    screen2.style.display = "flex";
  };
  