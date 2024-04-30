const userInfoSection = document.querySelector(".user-info");
const ul = document.createElement("ul");
userInfoSection.append(ul);

const userInfo = {
  userName: "Admin",
  name: "John",
  familyName: "Doe",
  role: "Admin",
  //a function for changing object key so I could
  //put the object values and keys as they are in HTML
  //(capitalise the first letter and adding space between words)
  keyName: function () {
    for (let [key, value] of Object.entries(userInfo)) {
      if (typeof userInfo[key] != "function") {
        let replaceLetter = key.replace("N", " n");
        key = replaceLetter[0].toUpperCase() + replaceLetter.slice(1);
        const liItem = document.createElement("li");
        liItem.classList.add("list");
        liItem.innerHTML = `${key}: ${value}`;
        ul.append(liItem);
      }
    }
  },
};

userInfo.keyName();
