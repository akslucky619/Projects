var input1 = document.getElementById('user');
var input2 = document.getElementById('pass');
var button = document.getElementById('button');
var display = document.getElementById('second');
var display2 = document.getElementById('main')
var head = document.getElementById('head');


function check() {
    if (input1.value === "akash" && input2.value === "password") {
        head.style.display = "none"
        display2.style.display = "none"
        display.style.display = "block";
    }
    else{
        alert('check email and password');
    }
}

button.addEventListener('click', check)
