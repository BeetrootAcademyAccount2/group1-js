document.addEventListener("DOMContentLoaded", function () {
  const editBtn = document.querySelector(".edit-btn-img");
  const saveBtn = document.querySelector("#saveBtn");
  const cancelBtn = document.querySelector("#cancelBtn");

  editBtn.addEventListener("click", function () {
    document.querySelectorAll(".editable").forEach(function (el) {
      el.contentEditable = true;
      el.classList.add("editing");
    });

    saveBtn.style.display = "block";
    cancelBtn.style.display = "block";
  });

  saveBtn.addEventListener("click", function () {
    document.querySelectorAll(".editing").forEach(function (el) {
      el.contentEditable = false;
      el.classList.remove("editing");
    });

    saveBtn.style.display = "none";
    cancelBtn.style.display = "none";
  });

  cancelBtn.addEventListener("click", function () {
    document.querySelectorAll(".editing").forEach(function (el) {
      el.contentEditable = false;
      el.classList.remove("editing");
    });

    saveBtn.style.display = "none";
    cancelBtn.style.display = "none";
  });
});
