// Validation of user name and password

function validation() {
  let userName = document.f1.username.value;
  let passwordIn = document.f1.password.value;
  let userNameError = document.f1.querySelector("#userNameError");
  let passwordError = document.f1.querySelector("#passwordError");

  const userNamePattern = /^[0-9A-Za-z]{4,24}$/;
  const passwordPattern = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{6,32}$/;

  if (userName == "") {
    userNameError.innerHTML = "user name is required";
    userNameError.style.color = "red";
    return false;
  } else {
    userNameError.innerHTML = "";
  }

  if (!userNamePattern.test(userName)) {
    userNameError.innerHTML = "only letters and numbers, 4-24 characters";
    userNameError.style.color = "red";
    return false;
  }

  if (passwordIn == "") {
    passwordError.innerHTML = "password is required";
    passwordError.style.color = "red";
    return false;
  } else {
    passwordError.innerHTML = "";
  }

  if (!passwordPattern.test(passwordIn)) {
    passwordError.innerHTML = "password doesn't match";
    passwordError.style.color = "red";
    return false;
  }
}

// Eye toggle
$(document).ready(function () {
  const password = $("#password");
  $("#eye").click(function () {
    if (password.prop("type") == "password") {
      $(this).addClass("fa-eye-slash");
      $(this).removeClass("fa-eye");
      password.attr("type", "text");
    } else {
      $(this).removeClass("fa-eye-slash");
      $(this).addClass("fa-eye");
      password.attr("type", "password");
    }
  });
});

//redirecting to menu page

function redirect() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "group1") {
    // alert("Login is successful!");
    setTimeout(function () {
      window.location.href = "menu.html";
    }, 0);
  }
}

// default open login page
// window.location.href = "login.html";
