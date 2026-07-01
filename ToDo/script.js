const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const liste = document.querySelector(".liste");

function ajouter(texte) {
  if (texte.trim() == "") {
    return alert("va chier");
  }

  const li = document.createElement("li");
  const btnsup = document.createElement("button");
  btnsup.textContent = "Supp";
  li.textContent = texte;
  li.appendChild(btnsup);
  liste.appendChild(li);
  input.value = "";
  btnsup.addEventListener("click", () => {
    li.remove();
  });
}
btn.addEventListener("click", () => {
  ajouter(input.value);
  console.log(input.value);
});
