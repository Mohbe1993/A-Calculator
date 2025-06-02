let calc = document.querySelector(".calc");
let onBtn = document.querySelector(".onBtn");

onOff();

function onOff() {
  if (calc.style.display === "none") {
    calc.style.display = "block";
    calc.style.animation = "show 1s linear forwards";
    onBtn.style.background = "red";
  } else {
    calc.style.display = "none";

    onBtn.style.background = "green";
  }
}
