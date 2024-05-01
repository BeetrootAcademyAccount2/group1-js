const userInfoSection = document.querySelector(".user-info");
const ul = document.createElement("ul");
userInfoSection.append(ul);

const userInfo = {
  userName: "Admin",
  name: "John",
  familyName: "Doe",
  role: "Admin",
  //a function for displaying key pairs in HTML.
  //Key name is modified (1st letter capitalised and space between words added).
  //for each key pair there is a li with 2 nested spans
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

        const valueName = document.createElement("span");
        valueName.innerHTML = value;
        liItem.append(valueName);

        ul.append(liItem);
      }
    }
  },
};

userInfo.keyName();
