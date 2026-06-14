const form = document.getElementById("form");
const input = document.getElementById("input");
const p = document.querySelector("#solde");
const btn = document.querySelector(".btn");
const span = document.getElementById("span");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const timers = document.querySelector(".tictac");
const LIMIT = 30 * 1000;
let MONTANT = parseInt(input.value);

p.textContent = "1000$";
let solde = parseInt(p.textContent);

function count(date) {
  return {
    Minute: Math.floor(date / (60 * 1000)),
    Seconde: Math.floor(date % (60 * 1000)) / 1000,
  };
}
function transac(mont) {
  const newp = document.createElement("p");

  let newsolde = solde - mont;
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value > solde || input.value <= 0 || !input.value) {
    alert("veuillez entrer un nouveau montant");
  } else {
    let date = LIMIT;
    let m = count(date);
    let t = setInterval(() => {
      if (date <= 0) return clearInterval(t);
      else {
        date -= 1000;
        m = count(date);
        console.log(m, date);
        span.innerHTML = `${m.Minute}Min :${m.Seconde}Secs `;
      }
    }, 1000);
    transac(MONTANT);
    console.log(transac(MONTANT));

    timers.style.display = "flex";
  }
});
