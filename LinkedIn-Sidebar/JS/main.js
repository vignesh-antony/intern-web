var elem = document.getElementsByClassName("see-more");
for (var i = 0; i < elem.length; i++) {
  elem[i].onclick = function () {
    if (this.innerHTML === "see less") {
      this.previousSibling.style.display = "none";
      this.innerHTML = "... see more";
    } else {
      this.previousSibling.style.display = "inline";
      this.innerHTML = "see less";
    }
  };
}

var menu = document.getElementById("menu-bar");
var side = document.getElementById("side");
var sbar = document.getElementById("side-bar");

side.addEventListener("click", function () {
  if (event.target != menu) {
    sbar.style.left = "-100%";
    side.style.left = "-100%";
  }
});

menu.onclick = function () {
  side.style.left = "0";
  sbar.style.left = "0";
};

sbar.addEventListener("click", function (ev) {
  ev.stopPropagation();
});
