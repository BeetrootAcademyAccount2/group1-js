const addButtons = document.querySelectorAll(".add-item");
const modal = document.querySelector(".modal");
const cancelBtn = modal.querySelector(".modal__button--cancel");
const saveBtn = modal.querySelector(".modal__button--save");
const form = modal.querySelector(".form");
const accordionItems = document.querySelectorAll(".accordion-item");
const adminModal = document.querySelector(".admin-modal");
const adminModalBtn = document.querySelector(".admin-modal__button");
const savedData = JSON.parse(localStorage.getItem("accordion_productList"));
const deleteModal = document.querySelector(".delete-modal");
const deleteModalCancelBtn = document.querySelector(".delete-modal--cancel");
const deleteModalDeleteBtn = document.querySelector(".delete-modal--delete");

function openAdminModal() {
  window.addEventListener("load", () => {
    adminModal.style.display = "block";
    adminModalBtn.addEventListener("click", () => {
      adminModal.style.display = "none";
    });
  });
}
openAdminModal();

function fillUlFromLS() {
  accordionItems.forEach((accordion) => {
    savedData[accordion.dataset.category].forEach((item) => {
      appendItem(accordion, item);
    });
  });
}

function appendItem(accordion, item) {
  const newItem = document.createElement("li");
  const itemContainer = document.createElement("div");

  const infoButton = document.createElement("i");
  const editButton = document.createElement("i");
  const deleteButton = document.createElement("i");

  itemContainer.classList.add("item-container");
  infoButton.classList.add("fa-solid", "fa-info", "info-button");
  editButton.classList.add("fa-solid", "fa-pen-to-square", "edit-button");
  deleteButton.classList.add("fa-solid", "fa-trash", "delete-button");

  infoButton.style.visibility = "visible";
  editButton.style.visibility = "visible";
  deleteButton.style.visibility = "visible";

  itemContainer.appendChild(newItem);
  itemContainer.appendChild(infoButton);
  itemContainer.appendChild(editButton);
  itemContainer.appendChild(deleteButton);

  editButton;

  deleteButton.addEventListener("click", () => {
    deleteModal.style.display = "block";
    deleteModalCancelBtn.addEventListener("click", () => {
      deleteModal.style.display = "none";
    });
    const makeDeleteModalBtnWork = () => {
      if (item && accordion.dataset.category) {
        const category = accordion.dataset.category;
        const updatedItems = savedData[category].filter((savedItem) => savedItem.id !== item.id);
        savedData[category] = updatedItems;
        localStorage.setItem("accordion_productList", JSON.stringify(savedData));
        itemContainer.remove();
      }
      deleteModal.style.display = "none";
    };
    // const savedData = JSON.parse(localStorage.getItem('accordion_productList'));
    deleteModalDeleteBtn.addEventListener("click", makeDeleteModalBtnWork);
  });

  newItem.textContent = item.formItemName;
  accordion.querySelector(".item-list").appendChild(itemContainer);
}

if (!localStorage.getItem("accordion_productList")) {
  localStorage.setItem(
    "accordion_productList",
    JSON.stringify({
      nonAlcohol: [],
      alcohol: [],
      main: [],
      deserts: [],
      other: [],
    })
  );
}

fillUlFromLS();

addButtons?.forEach((button) => {
  button.addEventListener("click", () => {
    modal.style.display = "block";
    modal.dataset.category = button.dataset.category;
  });
});

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

saveBtn.addEventListener("click", () => {
  let isEmpty = true;
  // e.preventDefault();
  const formData = {};

  form.querySelectorAll(".form__input").forEach((input) => {
    formData[input.name] = input.value;

    if (input.value.length) {
      isEmpty = false;
    }
  });

  if (!isEmpty) {
    let data = JSON.parse(localStorage.getItem("accordion_productList"));
    data[modal.dataset.category].push(formData);
    localStorage.setItem("accordion_productList", JSON.stringify(data));
    accordionItems.forEach((accordion) => {
      if (accordion.dataset.category === modal.dataset.category) {
        appendItem(accordion, formData);
      }
    });
  }

  modal.style.display = "none";
  form.reset();
});
