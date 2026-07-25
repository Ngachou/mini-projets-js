const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const pwd = document.getElementById("password");
const confirmpwd = document.getElementById("confirmpass");
const btn = document.querySelector(".btn");

function verifyPassword(input1, input2, input3, input4) {
  if (input1 !== input2) {
    return alert("les mot de passe ne sont pas corrects !");
  }
}
btn.addEventListener("click", (e) => {
  if (
    !firstname.value &&
    !lastname.value &&
    !email.value &&
    !pwd.value &&
    !confirmpwd.value
  ) {
    return alert("Veuillez remplir tout les champs du formulaire");
  }
  const input1 = pwd.value;
  const input2 = confirmpwd.value;
  verifyPassword(input1, input2);
  e.preventDefault();
});
