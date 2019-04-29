var server = require('./app');

var input = document.getElementById("input-field");
var button = document.getElementById("button-box");
var ul = document.querySelector("unorder");
var textValue = input.value;
var sst = [];

function addTodo(todos) {
    todos.forEach((todo,i)=>{
        const li = document.createElement("li");
        li.setAttribute('data-id', i);
        li.classList.add("mylist");
        ul.appendChild(li);
    })
}
function handleClick(event){
    
  sst.push({textValue});
  displayTodo(sst)
    }

button.addEventListener("click", ()=>{
                        handleClick(),
                        addTodo()});


