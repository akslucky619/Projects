window.Todo = {
  addTaskButton: document.getElementById("add-task-button"),
  newTaskInput: document.getElementById("new-task-input"),
  container: document.getElementById("todolist-container"),
  template: document.getElementById("list-item-template").innerText,
  setup: function() {
    Todo.addTaskButton.addEventListener('click', Todo.onAddTaskClicked);
    Todo.container.addEventListener('click', Todo.onTodolistClicked);

    Todo.renderTasks();
  },
  onAddTaskClicked: function(event) {
    var taskName = Todo.newTaskInput.value;
    Todo.newTaskInput.value = "";

    var taskHTML = Todo.template.replace("<!-- TASK_NAME -->", taskName);
    Todo.container.insertAdjacentHTML('afterbegin', taskHTML);

    Todo.saveTask(taskName, false);
  },
  onTodolistClicked: function(event) {
    var targetElement = event.toElement;

    while (!targetElement.classList.contains("task")) {
      targetElement = targetElement.parentElement;
    }

    var checkbox = targetElement.querySelector(".checkbox");

    if (checkbox.checked) {
      targetElement.classList.add("completed");
    } else {
      targetElement.classList.remove("completed");
    }

    var taskNameElement = targetElement.querySelector(".task-name");
    var taskName = taskNameElement.innerText;

    Todo.saveTask(taskName, checkbox.checked);
  },
  saveTask: function(name, isCompleted) {
    window.localStorage.setItem(name, isCompleted);
  },
  renderTasks: function() {
    for (var i = 0; i < window.localStorage.length; i++) {
      var taskName = window.localStorage.key(i);
      var isCompleted = window.localStorage.getItem(taskName) == "true";
      var taskHTML = Todo.template.replace("<!-- TASK_NAME -->", taskName);

      if (!isCompleted) {
        Todo.container.insertAdjacentHTML('afterbegin', taskHTML);
      }
    }
  }
}

Todo.setup();