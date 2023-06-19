const f = document.forms;
const email = f.form.elements.email;
const password = f.form.elements.password;
const submitBtn = f.form.elements.submit;
const showPass = f.form.elements.checkbox;
const title = document.querySelector("h1");
const body = document.body;
const container = document.getElementById("container");
const inputs = document.querySelectorAll(".inp");
const errP =document.createElement('p')
errP.innerHTML = "incorect email or password"
errP.classList.add("errp")

//logic

function getItems(e) {
  e.preventDefault();
  let getEmail = JSON.parse(localStorage.getItem("emails"));
  let getPassword = JSON.parse(localStorage.getItem("passwords"));
  const foundEmailIndex = getEmail.findIndex(item => item === email.value);

  if (foundEmailIndex === undefined || getPassword[foundEmailIndex] !== password.value) {
    // alert("incorect email or password")
    f.form.append(errP)

  } else {
    window.location.href = "../../fetch.html";

  }

}

showPass.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};








