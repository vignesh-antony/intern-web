var tab = document.getElementsByClassName("block-tab");
var cont = document.getElementsByClassName("continue");
var prev = document.getElementsByClassName("previous");
var lform = document.getElementById("login-form");
var sform = document.getElementById("signup-form");
var login = document.getElementById("login-back");
var signup = document.getElementById("signup-forward");
var smob = document.getElementById("signup-forward-mobile");

// Form Required Elements
var uname = document.getElementById("uname");
var pass = document.getElementById("pass");
var repass = document.getElementById("re-pass");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var date = document.getElementById("date");
var month = document.getElementById("month");
var year = document.getElementById("year");

// Form Validation
function checkForm(type) {
  if (type == 1) {
    if (uname.value === "") {
      alert("Please fill in your user-name");
      return 0;
    }
    if (pass.value === "" || repass.value === "") {
      alert("Please fill in password fields");
      return 0;
    }
  } else {
    if (fname.value === "" || lname.value === "") {
      alert("Please fill in both first name and last name");
      return 0;
    }
    if (
      date.options[date.selectedIndex].value === "" ||
      month.options[month.selectedIndex].value === "" ||
      year.options[year.selectedIndex].value === ""
    ) {
      alert("Please fill in your date-of-birth");
      return 0;
    }
  }
}

// Update Progress Bar
var progressBar = function (data, type) {
  var lid = "l-" + data;
  var nid = "n-" + data;

  if (type === "c") {
    document.getElementById(lid).classList.add("finish-line");
    document.getElementById(nid).classList.add("finished");
  } else {
    document.getElementById(lid).classList.remove("finish-line");
    if (data !== "1") {
      document.getElementById(nid).classList.remove("finished");
    }
  }
};

for (elem of tab) {
  // For Preventing Tab press
  elem.addEventListener("keydown", function (e) {
    if (e.keyCode == 9) {
      e.preventDefault();
    }
  });
}

for (elem of cont) {
  // For Sliding left Animation
  elem.onclick = function () {
    var data = this.getAttribute("data-id");

    if (checkForm(data) != 0) {
      progressBar(data, "c");
      this.parentElement.parentElement.classList.add("slide-left");
    }

    window.scrollTo(0, 0);
  };
}

for (elem of prev) {
  // For Sliding Right Animation
  elem.onclick = function () {
    var data = this.getAttribute("data-id");
    progressBar(data, "p");

    this.parentElement.parentElement.previousElementSibling.classList.remove(
      "slide-left",
    );
    window.scrollTo(0, 0);
  };
}

// Toggling Login Form
login.onclick = function () {
  sform.classList.add("hide");
  lform.classList.remove("hide");
};

// Toggling Signup Form
signup.onclick = function () {
  lform.classList.add("hide");
  sform.classList.remove("hide");
};
smob.onclick = function () {
  window.scrollTo(0, 0);

  lform.classList.add("hide");
  sform.classList.remove("hide");
};

// Filling in Date
for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  date.appendChild(option);
}

// Filling in Month
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
for (var i = 0; i < 12; i++) {
  var option = document.createElement("option");
  option.value = months[i];
  option.innerHTML = months[i];
  month.appendChild(option);
}

// Filling in Year
for (var i = 2020; i >= 1940; i--) {
  var option = document.createElement("option");
  option.value = i;
  option.innerHTML = i;
  year.appendChild(option);
}
