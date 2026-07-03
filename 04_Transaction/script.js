const form = document.getElementById("form");
const input = document.getElementById("input");
const p = document.querySelector("#solde");
const btn = document.querySelector(".btn");
const minute = document.getElementById("minutes");
const seconde = document.getElementById("secondes");
const stopper = document.getElementById("btn1");
const timers = document.querySelector(".tictac");
let solde = parseInt(localStorage.getItem("mnt")) || 1000;
const LIMIT = 10 * 1000;
p.textContent = solde;

//this function enables of convert time to millisecondes
function decount(date) {
  return {
    Minute: Math.floor(date / (60 * 1000)),
    Seconde: Math.floor(date % (60 * 1000)) / 1000,
  };
}

//this function does a soustraction from the account
function transac(mont) {
  let newsolde = solde - mont;
  localStorage.setItem("mnt", newsolde);
  return (p.textContent = newsolde);
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value > solde || input.value <= 0 || !input.value)
    return alert("veuillez entrer un nouveau montant");

  let montant = parseInt(input.value);
  let date = LIMIT;
  let m = decount(date);

  //this function decount the transaction time
  let t = setInterval(() => {
    if (date <= 0) {
      transac(montant);
      timers.style.display = "none";
      clearInterval(t);
      return alert("Transaction effectuer");
    }
    date = date - 1000;
    m = decount(date);
    console.log(m, date);
    minute.innerHTML = `${m.Minute}Min `;
    seconde.innerHTML = ` :${m.Seconde}Sec`;
  }, 1000);
  timers.style.display = "flex";

  //this buttom stop the transaction
  stopper.addEventListener("click", () => {
    clearInterval(t);
    timers.style.display = "none";
    input.value = "";
  });
});
