let msg = document.getElementById("msg");
let button = document.getElementById("btn");

//
button.addEventListener("click", function () {
  msg.classList.toggle("is-active");
});
