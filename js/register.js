// document.getElementById("formReg").addEventListener("submit", function (event) {
// // Prevent form submission
//   event.preventDefault();
//   const form = document.getElementById("formReg");
//   const email = document.getElementById("email").value.trim();
//   const username = document.getElementById("username").value.trim();
//   const password = document.getElementById("password").value;
//   const repeatPassword = document.getElementById("repeatPassword").value;
//   const firstName = document.getElementById("firstName").value.trim();
//   const secondName = document.getElementById("secondName").value.trim();
//   const role = document.getElementById("role").value;

//   const emailError = document.getElementById("emailError");
//   const userNameError = document.getElementById("userNameError");
//   const passwordError = document.getElementById("passwordError");
//   const repeatPasswordError = document.getElementById("repearPasswordError");
//   const firstNameError = document.getElementById("firstNameError");
//   const secondNameError = document.getElementById("secondNameError");
//   const roleError = document.getElementById("roleError");

//   emailError.textContent = "";
//   userNameError.textContent = "";
//   passwordError.textContent = "";
//   repeatPasswordError.textContent = "";
//   firstNameError.textContent = "";
//   secondNameError.textContent = "";
//   roleError.textContent = "";

//   let isValid = true;

//   if (email === "" || !email.includes("@")) {
//     emailError.textContent = "Please enter a valid email address.";
//     isValid = false;
//   }

//   if (username === "") {
//     userNameError.textContent = "Please enter your password.";
//     isValid = false;
//   } else if (!username.match(/^[0-9A-Za-z]{3,24}$/)) {
//     addressError.textContent =
//       "Please enter a valid username (4-24 characters, alphanumeric only).";
//     isValid = false;
//   }

//   if (password === "") {
//     passwordError.textContent = "Please enter your password.";
//     isValid = false;
//   } else if (!password.match(/^(?=.*?[0-9])(?=.*?[A-Za-z]).{6,32}$/)) {
//     passwordError.textContent =
//       "Please enter a valid password (6-32 characters, at least one letter and one digit).";
//     isValid = false;
//   }

//   if (repeatPassword === "") {
//     repeatPasswordError.textContent = "Please repeat your password.";
//     isValid = false;
//   } else if (repeatPassword !== password) {
//     repeatPasswordError.textContent = "Passwords do not match.";
//     isValid = false;
//   }

//   if (firstName.length < 2) {
//     firstNameError.textContent =
//       "First name must be at least 2 characters long.";
//     isValid = false;
//   }

//   if (secondName.length < 2) {
//     secondNameError.textContent =
//       "Last name must be at least 2 characters long.";
//     isValid = false;
//   }

//   if (role === "") {
//     roleError.textContent = "Please select your role.";
//     isValid = false;
//   }

//   if (isValid) {
//     alert("Registration successful!");
//   }
// });

