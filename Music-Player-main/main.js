let text = document.querySelector("input");
let link = document.querySelector("a");

function page() {
  if (text.value === "") {
    alert("please enter your mood");
  } else {
    link.setAttribute("href", "http://127.0.0.1:5500/index.html");
  }
}
