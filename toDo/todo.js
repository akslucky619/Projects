let textInput = document.querySelector('.inputval');
let ul = document.querySelector('.lists');
let sst = [];

function handleClick(event){
    if (event.keyCode === 13){
  sst.push({text: textInput.value, isDone: false});
  displayTodo(sst)
}
}
function displayTodo(todos) {
  ul.innerHTML = "";
  todos.forEach((todo,i) => {
    const li = document.createElement('li');
    li.setAttribute('data-id', i);
    li.classList.add("mylist");
    li.style.fontSize = "40px";
    // li.style.borderBottom = "2px solid black"
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = todo.isDone;
    const del = document.createElement('span');
    // del.classList.add("delbutt")
    del.innerText = 'X';
    const name = document.createElement('p');
    name.classList.add("edit");
    name.textContent = todo.text;
    li.appendChild(checkbox);
    li.appendChild(name);
    li.appendChild(del);
    ul.appendChild(li);
    textInput.value = "";
  });
  document.querySelector('.itemsLeft').innerText = `${sst.filter(t => t.isDone === false).length} Items Left`;
  document.querySelectorAll('input[type="checkbox"]').forEach(el => el.addEventListener('click', toggleTodo));
  document.querySelectorAll('span').forEach(el => el.addEventListener('click', handleDelete));
}

function handleDelete(e) {
  let index = e.target.parentElement.dataset.id;
  sst.splice(index, 1);
  displayTodo(sst);
}

function toggleTodo(event) {
  sst[event.target.parentElement.dataset.id].isDone = !sst[event.target.parentElement.dataset.id].isDone;
  displayTodo(sst);
}

displayTodo(sst);

function checkall() {
    for (let i = 0; i < sst.length; i++) {
        if(sst[i].isDone === true){
            sst[i].isDone = false;
        }
     else if(sst[i].isDone === false){
         sst[i].isDone = true;
     }
    }
    displayTodo(sst);
}

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


document.querySelector(".check").addEventListener("click", checkall);
document.addEventListener("keyup", handleClick);
document.querySelectorAll('.filter ul button').forEach(el => el.addEventListener('click', handleFilter));
