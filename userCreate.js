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
errMessage.classList.add ("errMessage")
const fNameErr = document.getElementById("fNameErr")
const lNameErr =document.getElementById("lNameErr")
const emailErr = document.getElementById("emailErr")
const passErr = document.getElementById("passErr")
const confirpassErr = document.getElementById("confirpassErr")


function setItem(e) {
    e.preventDefault();


}






submit.onclick = (e) => {
    e.preventDefault()

    if (firstName.value[0] !== (firstName.value.toUpperCase())[0]) {
        fNameErr.append(errMessage)
        errMessage.innerHTML = "First name must be started whit capital letter"
        errMessage.style.display = "block "
       return

    }else{
        errMessage.style.display = "none "

    }


    if (lastName.value[0] !== (lastName.value.toUpperCase())[0]) {
        lNameErr.append(errMessage)
        errMessage.innerHTML ="Last name must be started whit capital letter"
        errMessage.style.display = "block "
        return


    }else{
        errMessage.style.display = "none "

    }

    if (((email.value).slice((email.value.indexOf("@")), -1)).length < 3) {
        emailErr.append(errMessage)
        errMessage.innerHTML ="there must be at least 2 after @"
        errMessage.style.display = "block "
        return

    }else{
        errMessage.style.display = "none "

    }
    if ((pass.value.length < 8)) {
        passErr.append(errMessage)
        errMessage.innerHTML = "password length must not be less than 8"
        errMessage.style.display = "block "
        return
    }else{
        errMessage.style.display = "none "

    }
    if (pass.value !== repeatpass.value) {
        confirpassErr.append(errMessage)
        errMessage.innerHTML = "passwords must match"
        errMessage.style.display = "block "
        return

    }else{
        errMessage.style.display = "none "

    }


    let obj = {
        firstNames: firstName.value,
        lastNames: lastName.value,
        emails: email.value,
        passwords: pass.value

    }
    localStorage.setItem("registration", JSON.stringify(obj))

}