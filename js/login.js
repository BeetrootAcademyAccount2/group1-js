function validation() {
  let userName = document.f1.username.value;
  let password = document.f1.password.value;
  let userNameError = document.f1.querySelector("#userNameError");
  let passwordError = document.f1.querySelector("#passwordError");

  const userNamePattern = /^[0-9A-Za-z]{4,24}$/;
  const passwordPattern = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

  if (userName == "") {
    userNameError.innerHTML = "user name is ruquired";
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

  if (password == "") {
    passwordError.innerHTML = "password is ruquired";
    passwordError.style.color = "red";
    return false;
  } else {
    passwordError.innerHTML = "";
  }

  if (!passwordPattern.test(password)) {
    passwordError.innerHTML = "password doesn't match";
    passwordError.style.color = "red";
    return false;
  }

  return true;
}
