let textInput = document.querySelector('.todo-input');
let ul = document.querySelector('.lists');
let sst = [
  {
    "text": "Learn React",
    "isDone": true
  },
  {
    "text": "Learn UI",
    "isDone": true
  },
  {
    "text": "UI/UX",
    "isDone": false
  }
];

function handleClick(){
  sst.push({text: textInput.value, isDone: false});
  displayTodo()
}
function displayTodo(todos) {
  ul.innerHTML = "";
  todos.forEach((todo,i) => {
    const li = document.createElement('li');
    li.setAttribute('data-id', i);
    li.classList.add("list");
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = todo.isDone;
    const del = document.createElement('span');
    del.innerText = 'X';
    const name = document.createElement('p');
    name.textContent = todo.text;
    li.appendChild(checkbox);
    li.appendChild(name);
    li.appendChild(del);
    ul.appendChild(li);
    textInput.value = "";
  });
  document.querySelectorAll('input[type="checkbox"]').forEach(el => el.addEventListener('click', toggleTodo));
  document.querySelectorAll('span').forEach(el => el.addEventListener('click', handleDelete));
}
function handleDelete(e) {
  let index = e.target.parentElement.dataset.id;
  sst.splice(index, 1);
  displayTodo(sst);
}

function toggleTodo(event) {
  sst[event.target.parentElement.dataset.id].isDone = true;
  displayTodo(sst);
}

displayTodo(sst);

function handleFilter(e) {
  if (e.target.innerText === 'All') {
    displayTodo(sst);
  } else if(e.target.innerText === 'Done') {
    let filtered = sst.filter(todo => todo.isDone === true);
    displayTodo(filtered);
  } else {
    let filtered = sst.filter(todo => todo.isDone !== true);
    displayTodo(filtered);
  }
}

document.querySelector('button').addEventListener('click', handleClick);
document.querySelectorAll('.filter ul li').forEach(el => el.addEventListener('click', handleFilter));
// document.addEventListener('click', (e) => console.log(e.target))