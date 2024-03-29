const inputtext = document.getElementById("input-text");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputtext.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputtext.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputtext.value = "";
  saveData();
}

listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//function to save data

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

//function to display data when we open the website again

function showData() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showData();
