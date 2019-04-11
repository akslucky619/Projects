var unordList = document.getElementById("list");
var unbutton = document.getElementById("remove");
var text = document.getElementById("putin");

function addItem(event){
    if (event.keyCode === 13) {
        var li = document.createElement("li")
        var checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        li.appendChild(checkbox);
        var toDoTask = document.createElement("p");
        var inputValue = document.getElementById("text").value;
        toDoTask.textContent = inputValue;
        li.appendChild(toDoTask);
        var del = document.createElement("span")
        del.textContent = "  X";
        li.appendChild(del);

        if (inputValue === "") {
            alert("Don't leave it empty!");
        }
        else{
            unordList.appendChild(li);
            text.value = "";
        }

    }
}
document.addEventListener("keyup", addItem);
function deleteToDoItem(e){
    e.target.parentElement.style.display = none;
}
document.querySelectorAll("span").forEach(elm => elm.addEventListener("click", deleteToDoItem));