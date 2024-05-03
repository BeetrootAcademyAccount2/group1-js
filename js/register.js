function registrValidation() {
  let isValid = true;

  // Reset error messages
  $(".error-message").html("");

  // validate email
  const email = $("#email").val().trim();
  if (email === "") {
    $("#emailError").html("Email is required").css("color", "red");
    isValid = false;
  } else if (!isValidEmail(email)) {
    $("#emailError")
      .html("Please enter a valid email address")
      .css("color", "red");
    isValid = false;
  }

  // validate username
  const username = $("#username").val().trim();
  if (username === "") {
    $("#userNameError").html("Username is required").css("color", "red");
    isValid = false;
  }

  // validate password
  const password = $("#password").val().trim();
  if (password === "") {
    $("#passwordError").html("Password is required").css("color", "red");
    isValid = false;
  } else if (!isValidPassword(password)) {
    $("#passwordError")
      .html("Please enter a valid password")
      .css("color", "red");
    isValid = false;
  }

  // validate repeated password
  const repeatPassword = $("#repeatPassword").val().trim();
  if (repeatPassword === "") {
    $("#repeatPasswordError")
      .html("Pleace repeat your password")
      .css("color", "red");
    isValid = false;
  } else if (repeatPassword !== password) {
    $("#repeatPasswordError")
      .html("Passwords do not match")
      .css("color", "red");
    isValid = false;
  }

  // validate first name
  const firstName = $("#firstName").val().trim();
  if (firstName.length < 2) {
    $("#nameError")
      .html("First name must be at least 2 characters long")
      .css("color", "red");
    isValid = false;
  }
  // validate second name
  const secondName = $("#secondName").val().trim();
  if (secondName.length < 2) {
    $("#secondNameError")
      .html("Second name must be at least 2 characters long")
      .css("color", "red");
    isValid = false;
  }

  //   validate a role selection
  const role = $("#role").val().trim();
  if (role === "") {
    $("#roleError").html("Please select a role").css("color", "red");
    isValid = false;
  } else if (role !== "Admin") {
    $("#roleError").html("Only 'Admin' role is allowed").css("color", "red");
    isValid = false;
  }

  return isValid;
}

// valedate patterns
function isValidEmail(email) {
  // email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPassword(password) {
  const passwordPattern = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{6,32}$/;
  return passwordPattern.test(password);
}

// redirect to login page

$(document).ready(function () {
  // Attach click event handler to the "Sign In" button
  $("#btn-submit").click(function () {
    redirectToLogin();
  });
});

function redirectToLogin() {
  if (registrValidation()) {
    // Redirect to the login page
    setTimeout(function () {
      window.location.href = "menu.html";
    }, 0);
  }
}
