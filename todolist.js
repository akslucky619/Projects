var addTaskButton = document.getElementById("add-task-button");
var newTaskInput = document.getElementById("new-task-input");
var todolistContainer = document.getElementById("todolist-container");
var templateElement = document.getElementById("list-item-template");
var template = templateElement.innerText;

addTaskButton.addEventListener('click', function(event) {
  var taskName = newTaskInput.value;
  newTaskInput.value = "";

  var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
  todolistContainer.insertAdjacentHTML('afterbegin', taskHTML);
});

todolistContainer.addEventListener('click', function(event) {
  var targetElement = event.toElement;
  console.log(targetElement)
  while (!targetElement.classList.contains("task")) {
    targetElement = targetElement.parentElement;
  }

  var checkbox = targetElement.querySelector(".checkbox");

  if (checkbox.checked) {
    targetElement.remove();
  }
});