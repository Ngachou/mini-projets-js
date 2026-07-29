const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const pwd = document.getElementById("password");
const confirmpwd = document.getElementById("confirmpass");
const up = document.getElementById("file");

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

  // methode POST
  const data = {
    name: firstname.value,
    username: lastname.value,
    email: email.value,
  };
  //pour uploader un fichier
  const formData = new FormData();
  formData.append("fichier", up);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.setRequestHeader("Content-Type", "application/json, charset=UTF-8");

  xhr.onload = function () {
    if (xhr.status === 201) {
      const reponse = JSON.parse(xhr.responseText);
      console.log(reponse);
    } else {
      console.log("Erreur HTTP: ", xhr.status);
    }
  };
  xhr.timeout = 8000;
  xhr.ontimeout = function () {
    console.log("le delais est deja passer");
  };
  xhr.onerror = function () {
    console.log("erreur reseau");
  };
  xhr.send(JSON.stringify(data), formData);
});
//
