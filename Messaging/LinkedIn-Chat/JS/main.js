var fbar = document.getElementById("filter");
var ficon = document.getElementById("filter-icon");
var list = document.getElementsByClassName("opt");

function removeActive() {
  for (item of list) {
    item.classList.remove("active");
  }
}

for (item of list) {
  item.addEventListener("click", function () {
    removeActive();
    this.classList.add("active");
  });
}

ficon.addEventListener("click", function () {
  fbar.classList.toggle("hide");
});
