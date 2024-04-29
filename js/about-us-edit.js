document.addEventListener("DOMContentLoaded", function () {
  const editBtn = document.querySelector(".edit-btn-img");
  const saveBtn = document.querySelector("#saveBtn");
  const cancelBtn = document.querySelector("#cancelBtn");
  const founderSection = document.querySelector(".founder-section-flex");
  const communitySection = document.querySelector(".community-section-flex");

  let originalFounderContent = {};
  let originalCommunityContent = {};

  editBtn.addEventListener("click", function () {
    // For founder section
    founderSection.querySelectorAll(".editable").forEach(function (el) {
      originalFounderContent[el.id] = el.innerHTML;
      el.contentEditable = true;
      el.classList.add("editing");
    });

    // For community section
    communitySection.querySelectorAll(".editable").forEach(function (el) {
      originalCommunityContent[el.id] = el.innerHTML;
      el.contentEditable = true;
      el.classList.add("editing");
    });

    saveBtn.style.display = "block";
    cancelBtn.style.display = "block";
  });

  saveBtn.addEventListener("click", function () {
    // For founder section
    founderSection.querySelectorAll(".editing").forEach(function (el) {
      el.contentEditable = false;
      el.classList.remove("editing");
    });

    // For community section
    communitySection.querySelectorAll(".editing").forEach(function (el) {
      el.contentEditable = false;
      el.classList.remove("editing");
    });

    saveBtn.style.display = "none";
    cancelBtn.style.display = "none";
  });

  cancelBtn.addEventListener("click", function () {
    // For founder section
    founderSection.querySelectorAll(".editing").forEach(function (el) {
      el.innerHTML = originalFounderContent[el.id];
      el.contentEditable = false;
      el.classList.remove("editing");
    });

    // For community section
    communitySection.querySelectorAll(".editing").forEach(function (el) {
      el.innerHTML = originalCommunityContent[el.id];
      el.contentEditable = false;
      el.classList.remove("editing");
    });

    saveBtn.style.display = "none";
    cancelBtn.style.display = "none";
  });
});
