let Btn = document.querySelector("#BTN");
let Btn2 = document.querySelector("#BTN1")
let Show = document.querySelectorAll(".show")
let NotShow = document.querySelectorAll(".notshow")
Btn2.addEventListener("click", () => {
 NotShow.style.display = "flex";
 Show.style.display = "none";
} );
Btn.addEventListener("click", () => {
  Show.style.display = "flex";
  NotShow.style.display = "none";
} )