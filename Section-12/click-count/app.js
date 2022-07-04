let p = document.querySelector("p");
let clickCount = 0;

function changePText() {
  clickCount++;
  p.textContent = "Clicked " + clickCount + " times!";
}

p.addEventListener("click", changePText);
