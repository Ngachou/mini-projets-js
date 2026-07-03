function Decrement(val) {
  let t = setInterval(() => {
    if (val < 0) return clearInterval(t);
    console.log(val);
    val--;
  }, 1000);
}
Decrement(10);

//creation d'un compteur
const bouton = document.querySelectorAll(".btn");
const number = document.getElementById("num");
let i = 0;
function calculeur(val) {
  if (val === "107") i++;
  else i--;
  return i > 0 ? i : 0;
}
bouton.forEach((btn) =>
  btn.addEventListener("click", () => {
    number.textContent = calculeur(btn.getAttribute("data-key"));
  }),
);

//take of value the user and after to do a decrementation
btn.addEventListener("click", () => {
  function Decrement(input) {
    let t = setInterval(() => {
      if (input < 0) return clearInterval(t);
      let span = document.createElement("span");
      span.innerText = input;
      console.log(span);
      form.appendChild(span);
      input--;
    }, 1000);
  }

  Decrement(input.value);
});
