function addTextItem(inputText) {
  const items = document.getElementById("items");

  items.appendChild(makeItem(inputText));
}

function makeItem(inputText) {
  const newItem = document.createElement("li");
  newItem.className = "list-group-item";
  newItem.textContent = inputText;

  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  deleteButton.textContent = "X";

  newItem.appendChild(deleteButton);

  makeItemDeletable(deleteButton);

  return newItem;
}

function makeItemDeletable(element) {
  element.addEventListener("click", () => {
    element.parentNode.remove();
  });
}

const input = document.getElementById("item");

document.getElementById("addForm").addEventListener("submit", (e) => {
  e.preventDefault();
  input.blur();

  const inputText = document.getElementById("item");

  if (!inputText.value.trim()) {
    inputText.value = "";
    return;
  }

  addTextItem(inputText.value);

  inputText.value = "";
});

const deleteButtons = document.getElementsByClassName("btn btn-danger btn-sm float-right delete");

for (let deleteButton of deleteButtons) {
  makeItemDeletable(deleteButton);
}

const filter = document.getElementById("filter");

filter.addEventListener("input", (e) => {
  const items = document.getElementsByClassName("list-group-item");

  selectText(items, filter.value.trim());

  function selectText(items, textToFind) {
    for (let item of items) {
      const itemText = item.textContent.replaceAll("X", "").trim(); // original item text

      const buttonPart = item.querySelector("button").outerHTML; // button's html

      if (!textToFind) {
        item.innerHTML = itemText + buttonPart;
        continue;
      }

      const highlightedItemText = itemText.replace(new RegExp(textToFind, "gi"), `<span>$&</span>`);

      item.innerHTML = highlightedItemText + buttonPart;

      Array.from(item.querySelectorAll("span")).map((span) => {
        span.style.backgroundColor = "red";
      });
      makeItemDeletable(item.querySelector("button"));
    }
  }
});