const userInfoSection = document.querySelector(".user-info");
const editBtn = document.getElementById("editBtn");
const editBtns = document.querySelector(".edit-buttons");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn = document.getElementById("saveBtn");

const ul = document.createElement("ul");
userInfoSection.append(ul);

const userInfo = {
  userName: "Admin",
  name: "John",
  familyName: "Doe",
  role: "Admin",
  //a function for displaying key pairs in HTML.
  //Key name is modified (1st letter capitalised and space between words added).
  //for each key pair there is a li with 2 nested spans (key, value) and input with key-value
  keyName: function () {
    for (let [key, value] of Object.entries(userInfo)) {
      if (typeof userInfo[key] != "function") {
        const replaceLetter = key.split(/(?=[A-Z])/).join(" ");
        key = replaceLetter[0].toUpperCase() + replaceLetter.slice(1);

        const liItem = document.createElement("li");
        liItem.classList.add("list");

        const keyName = document.createElement("span");
        keyName.innerHTML = `${key}: `;
        liItem.append(keyName);

        var valueName = document.createElement("span");
        valueName.classList.add("span2");

        valueName.innerHTML = value;
        liItem.append(valueName);
        var inputValue = document.createElement("input");

        Object.assign(inputValue, {
          type: "text",
          value: valueName.textContent,
          classList: "d-none input2",
        });
        liItem.append(inputValue);

        ul.append(liItem);
      }
    }
  },
};

userInfo.keyName();

var input2 = document.querySelectorAll(".input2");
var span = document.querySelectorAll(".span2");

editBtn.addEventListener("click", () => {
  editBtns.classList.remove("d-none");
  editBtn.classList.add("d-none");

  for (let i = 0; i < span.length; i++) {
    input2[i].classList.remove("d-none");
    span[i].replaceWith(input2[i]);
    input2[0].focus();
  }

  cancelBtn.addEventListener("click", () => {
    editBtns.classList.add("d-none");
    editBtn.classList.remove("d-none");
    for (let i = 0; i < span.length; i++) {
      input2[i].classList.add("d-none");
      input2[i].replaceWith(span[i]);
      input2[i].value = span[i].innerHTML;
    }
  });

  saveBtn.addEventListener("click", () => {
    if (input2[0].value.length <= 3) {
      window.alert("User name should contain more than 3 symbols");
      return;
    }
    for (let i = 1; i < span.length; i++) {
      if (input2[i].value.length <= 2) {
        window.alert("The field should contain more than 2 symbols");
        return;
      }
    }

    editBtns.classList.add("d-none");
    editBtn.classList.remove("d-none");
    for (let i = 0; i < span.length; i++) {
      input2[i].classList.add("d-none");
      span[i].innerHTML = input2[i].value;
      input2[i].replaceWith(span[i]);
    }
  });
});
