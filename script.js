const resultDisplay = document.getElementById("resultDisplay");
const ansDisplay = document.getElementById("ansDisplay");
let num = "";

var a = "";
var b = "";
var operator = "";

function add(a, b) {
  return a + b;
}

document.querySelectorAll("button").forEach((e) => {
  e.addEventListener("click", () => {
    if (e.innerHTML === "+") {
      operator = "+";
      resultDisplay.innerHTML += operator;
    } else if (e.innerHTML === "=") {
      ansDisplay.innerHTML = Number(a) + Number(b);
      document.querySelector("#ansDisplay").style.display = "block";

        a = "";
        b = "";
        operator = "";
    } else {
      if (operator === "") {
        a += e.innerHTML;

        console.log(a);
      } else {
        b += e.innerHTML;

        console.log(b);
      }
      resultDisplay.innerHTML = a + operator + b;
    }
  });
});

console.log("Recieved");
