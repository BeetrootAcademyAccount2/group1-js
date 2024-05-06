$(() => {
  $("<ul/>").appendTo($(".user-info"));

  const userInfo = {
    userName: "Admin",
    name: "John",
    familyName: "Doe",
    role: "Admin",
    // a function for displaying key pairs in HTML.
    // Key name is modified (1st letter capitalised and space between words added).
    // for each key pair there is a li with 2 nested spans (key, value) and input with key-value
    keyName: function () {
      for (let [key, value] of Object.entries(userInfo)) {
        if (typeof userInfo[key] != "function") {
          const replaceLetter = key.split(/(?=[A-Z])/).join(" ");
          key = replaceLetter[0].toUpperCase() + replaceLetter.slice(1);
          const liItem = $("<li>", {
            class: "list",
            appendTo: $("ul"),
          });

          $("<span>", {
            html: `${key}: `,
            appendTo: liItem,
          });

          var valueName = $("<span>", {
            class: "span2",
            html: value,
            appendTo: liItem,
          });

          $("<input>", {
            type: "text",
            value: valueName.text(),
            class: "input2",
            appendTo: liItem,
          }).hide();
        }
      }
    },
  };

  userInfo.keyName();
  $(".edit-buttons").hide();

  //edit btn
  $("#editBtn").on("click", () => {
    $(".edit-buttons").show();
    $("#editBtn").hide();
    $(".span2").hide();
    $(".input2").show();
    $(".input2")[0].focus();
  });

  //cancel btn
  $("#cancelBtn").on("click", () => {
    $(".edit-buttons").hide();
    $("#editBtn").show();
    $(".span2").show();
    $(".input2").hide();
    //each input value goes to initial .span2 value
    $(".input2").each(function (index) {
      $(this).val($(".span2").eq(index).html());
    });
  });
  //save btn
  $("#saveBtn").on("click", () => {
    if ($(".input2").eq(0).val().length <= 3) {
      alert("User name should contain more than 3 symbols");
      return;
    }
    for (let i = 1; i < $(".span2").length; i++) {
      if ($(".input2").eq(i).val().length <= 2) {
        alert("The field should contain more than 2 symbols");
        return;
      }
    }
    $(".edit-buttons").hide();
    $("#editBtn").show();
    $(".input2").hide();
    $(".span2").show();
    //each input value (capitalised and trimmed) goes to each span2 html.
    $(".span2").each(function (index) {
      let tempStr = $(".input2").eq(index).val();
      tempStr = tempStr.trim()[0].toUpperCase() + tempStr.trim().slice(1);
      $(this).html(tempStr);
    });
  });
});
