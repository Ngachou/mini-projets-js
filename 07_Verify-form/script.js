const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const pwd = document.getElementById("password");
const confirmpwd = document.getElementById("confirmpass");

function verifyPassword(input1, input2) {
  if (input1 !== input2) {
    alert("les mot de passe ne sont pas corrects !");
    return false;
  }
  return true;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !firstname.value ||
    !lastname.value ||
    !email.value ||
    !pwd.value ||
    !confirmpwd.value
  ) {
    return alert("Veuillez remplir tout les champs du formulaire");
  }
  if (!verifyPassword(pwd.value, confirmpwd.value)) {
    return;
  }

  console.log("Les mots de passe sont corrects");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.onload = function () {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      console.log(users);
    } else {
      console.log("Erreur HTTP: ", xhr.status);
    }
  };
  xhr.timeout = 8000;
  xhr.onerror = function () {
    console.log("erreur reseau");
  };
  xhr.send();
});
