const popUp = (data) => {
  function createTag(tag) {
    this.element = document.createElement(tag);
  }

  const wrap = new createTag("div");
  wrap.element.classList.add("wrap");

  const username = new createTag("p");
  username.element.classList.add("p");

  const email = new createTag("p");
  email.element.classList.add("p");

  const phone = new createTag("p");
  phone.element.classList.add("p");

  const editBtn = new createTag("button");
  editBtn.element.classList.add("editBtn");

  const body2 = new createTag("div");

  wrap.element.append(
    username.element,
    email.element,
    phone.element,
    editBtn.element
  );

  editBtn.element.onclick = (e) => {
    body1.style.zIndex = 0;
    body2.element.style.zIndex = 1;
  };

  const changePopup = new createTag("form");
  changePopup.element.classList.add("changePopup");

  const changePopupCont = new createTag("div");
  changePopupCont.element.classList.add("changePopupCont");

  const changeUsernameInp = new createTag("input");
  changeUsernameInp.element.classList.add("changeInp")
  const changeEmailInp = new createTag("input");
  changeEmailInp.element.classList.add("changeInp");
  const changePhoneInp = new createTag("input");
  changePhoneInp.element.classList.add("changeInp");
  const changeBtn = new createTag("button");
  changeBtn.element.classList.add("changeBtn");
  const errorMessage = new createTag("p");
  errorMessage.element.classList.add("errorMessage");

  changeUsernameInp.element.setAttribute("type", "text");
  changeEmailInp.element.setAttribute("type", "email");
  changePhoneInp.element.setAttribute("type", "text");
  changePhoneInp.element.setAttribute("id", "phoneInp");

  document.body.append(body2.element);

  body2.element.classList.add("body2");

  body2.element.append(changePopup.element);
  changePopup.element.append(changePopupCont.element);
  changePopupCont.element.append(
    changeUsernameInp.element,
    changeEmailInp.element,
    changePhoneInp.element,
    errorMessage.element,
    changeBtn.element
  );
  changeUsernameInp.element.value = data.username;
  changeEmailInp.element.value = data.email;
  changePhoneInp.element.value = data.phone;

  changePopup.element.onsubmit = (e) => {
    e.preventDefault();
    if (changeUsernameInp.element.value === "") {
      changeUsernameInp.element.value = data.username;
    }
    username.element.innerHTML = changeUsernameInp.element.value;

    if (changeEmailInp.element.value === "") {
      changeEmailInp.element.value = data.email;
    }
    email.element.innerHTML = changeEmailInp.element.value;

    if (changePhoneInp.element.value === "") {
      errorMessage.element.innerHTML = "equired";

      changePhoneInp.element.value = data.phone;
    }

    if (!Number(changePhoneInp.element.value)) {
      errorMessage.element.innerHTML = "the phone must be include only numbers";
      return;
    }
    if (changePhoneInp.element.value.length != 9) {
      errorMessage.element.innerHTML = "phone lenght must be have 9";
      return;
    }
    if (changePhoneInp.element.value[0] != "0") {
      errorMessage.element.innerHTML = "phone number must be start with 0";
      return;
    }
    phone.element.innerHTML = changePhoneInp.element.value;

    changePhoneInp.element.value = data.phone;

    body1.style.zIndex = 1;
    body2.element.style.zIndex = 0;
  };
  username.element.innerHTML = data.username;
  email.element.innerHTML = data.email;
  phone.element.innerHTML = data.phone;

  editBtn.element.innerText = "Edit";
  changeBtn.element.innerText = "OK";

  return wrap;
};
