const f = document.forms;
const name = f.form.elements.name;
const email = f.form.elements.email;
const password = f.form.elements.password;
const submitBtn = f.form.elements.submit;
const title = document.querySelector("h1");
const body = document.body;
const container = document.getElementById("container");
const inputs = document.querySelectorAll(".inp");
const span = document.querySelector("span")
const a = document.querySelector("a")
const popUp = document.createElement('div');
const h2 = document.createElement('h2')
h2.innerHTML="Error"
const p = document.createElement('p')
p.innerHTML = "You already have an account"
const btn = document.createElement("button") 
btn.innerHTML = "OK"
popUp.classList.add("popup")

 


function setItems(e) {
  e.preventDefault();
  const localStorageContentName = localStorage.getItem("names");
  const localStorageContentEmail = localStorage.getItem("emails");
  const localStorageContentPassword = localStorage.getItem("passwords");
  let names;
  let emails;
  let passwords;



  if (localStorageContentName === null && localStorageContentEmail === null && localStorageContentPassword === null) {
    names = [];
    emails = [];
    passwords = [];
  }
  if (JSON.parse(localStorageContentEmail).includes(email.value, 0)) {
    container.append(popUp)
    popUp.style.display = 'block';
    popUp.append(h2)
    popUp.append(p)
    popUp.append(btn)
    btn.onclick =(e)=>{
      e.preventDefault()
      popUp.style.display = "none"
    }


  }
  else {
    names = JSON.parse(localStorageContentName);
    emails = JSON.parse(localStorageContentEmail);
    passwords = JSON.parse(localStorageContentPassword);
  }
  names.push(name.value);
  emails.push(email.value);
  passwords.push(password.value);

  localStorage.setItem("names", JSON.stringify(names));
  localStorage.setItem("emails", JSON.stringify(emails));
  localStorage.setItem("passwords", JSON.stringify(passwords));
  window.location.href = "../signIn/signIn.html"
}











