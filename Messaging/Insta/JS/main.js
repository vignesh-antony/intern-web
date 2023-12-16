var send = document.getElementById("send-msg");
var icon = document.getElementById("icons");
var tbar = document.getElementById("tbar");

tbar.addEventListener("keyup", function () {
  if (this.value !== "") {
    icon.classList.add("hide");
    send.classList.remove("hide");
  } else {
    icon.classList.remove("hide");
    send.classList.add("hide");
  }
});
