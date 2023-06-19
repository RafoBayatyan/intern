const requestURl = "https://jsonplaceholder.typicode.com/users";
const body1 = document.createElement("div");
body1.classList.add("body1");
const div = document.createElement("div");
div.classList.add("userContainer");
function sendRequest(method, url, body = null) {
  return fetch(url).then((response) => {
    return response.json();
  });
}
const parrentOfWrap = document.createElement("div");
parrentOfWrap.classList.add("parrent");
let store = {};
sendRequest("GET", requestURl)
  .then((data) => {
    document.body.append(body1);
    body1.append(div);
    data.forEach((element) => {
      const btn = document.createElement("button");
      btn.classList.add("btn");
      btn.innerHTML = element.name;
      div.append(btn);
      const wrap = popUp(element);
      btn.onclick = (e) => {
        if (parrentOfWrap.hasChildNodes()) {
          parrentOfWrap.removeChild(parrentOfWrap.childNodes[0]);
          wrap.element.style.display = "none";
          if (store === wrap.element) {
            return
          }
        }
        body1.append(parrentOfWrap);
        parrentOfWrap.append(wrap.element);
        wrap.element.style.display = "flex";
        store = wrap.element;
      };
    });
  })
  .then((err) => console.log(err));
