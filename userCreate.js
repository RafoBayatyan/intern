const div = document.getElementById("container")
const form = document.getElementById("form")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const confirpass = document.getElementById("confirpass")
const submit = document.getElementById("submit")
const repeatpass = document.getElementById("confirpass")
const errMessage = document.createElement("p")
errMessage.classList.add("errMessage")
const fNameErr = document.getElementById("fNameErr")
const lNameErr = document.getElementById("lNameErr")
const emailErr = document.getElementById("emailErr")
const passErr = document.getElementById("passErr")
const confirpassErr = document.getElementById("confirpassErr")
const tooltipa = document.getElementById("a")
const tooltip9 = document.getElementById("9")
const tooltipSymb = document.getElementById("*")
const tooltipA = document.getElementById("A")
const tooltipLength = document.getElementById("8+")

const hasUpperCase = /[A-Z]+/
const hasLowerCase = /[a-z]+/
const hasNumber = /\d+/;
const hasSymbol = /[^\w\s]/;

function setItem(e) {
    e.preventDefault();


}
[firstName, lastName,].forEach(el => {
    el.addEventListener('input', (e) => {
        if (hasNumber.test(el.value)) {
            el.value = el.value.slice(0, -1);

        }
        if (hasSymbol.test(el.value)) {
            el.value = el.value.slice(0, -1);


        }

        if (el.value[0] !== (el.value.toUpperCase())[0]) {
            fNameErr.append(errMessage);
            errMessage.innerHTML = " Name must be started whit capital letter";
            errMessage.style.display = "block ";
            return

        } else {
            errMessage.style.display = "none ";
        }
    })
})

pass.addEventListener('input', (e) => {
    passErr.style.display = "block";
    const password = e.target.value;

    tooltipLength.classList.toggle("active", password.length > 8);
    tooltip9.classList.toggle("active", /\d/.test(password));
    tooltipSymb.classList.toggle("active", /[^\w\s]/.test(password));
    tooltipa.classList.toggle("active", /[a-z]/.test(password));
    tooltipA.classList.toggle("active", /[A-Z]/.test(password));
});

pass.addEventListener("focusout", (e) => {
    passErr.style.display = "none";

})

submit.onclick = (event) => {
    event.preventDefault();
    const isvalid = checkValidData();
    let autorizationData;
    if (isvalid) {
        autorizationData = {
            firstNames: firstName.value,
            lastNames: lastName.value,
            emails: email.value,
            passwords: pass.value

        }
    }

    onSetLocalStorigr(autorizationData);
}

const onSetLocalStorigr = (obj) => {
    localStorage.setItem("registration", JSON.stringify(obj));

}
const checkValidData = () => {
    if (((email.value).slice((email.value.indexOf("@")), -1)).length < 3) {
        emailErr.append(errMessage)
        errMessage.innerHTML = "there must be at least 2 after @";
        errMessage.style.display = "block ";
        return
    } else {
        errMessage.style.display = "none ";
    }
    if ((pass.value.length < 8)) {
        passErr.append(errMessage)
        errMessage.innerHTML = "password length must not be less than 8";
        errMessage.style.display = "block ";
        return
    } else {
        errMessage.style.display = "none ";
    }
    if (pass.value !== repeatpass.value) {
        confirpassErr.append(errMessage);
        errMessage.innerHTML = "passwords must match";
        errMessage.style.display = "block ";
        return
    } else {
        errMessage.style.display = "none ";
        return true

    }
}