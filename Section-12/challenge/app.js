let inputField = document.getElementById("prodName");
let p = document.getElementById("letterCount");
let span = p.firstElementChild;
let count = 0;
let errorColor = "rgb(228, 157, 128)";
let focusColor = "rgb(245, 245, 245)";

inputField.addEventListener("input", function (event) {
  count = event.target.value.length;

  if (count >= 60) {
    inputField.value = inputField.value.substring(0, 59);
  } else if (count >= 50) {
    inputField.style.backgroundColor = errorColor;
  } else if (count < 50 && inputField.style.backgroundColor == errorColor) {
    inputField.style.backgroundColor = focusColor;
  }

  span.textContent = count;
});
