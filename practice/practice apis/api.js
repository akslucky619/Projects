let getval = document.getElementById("input-box");
let buttonval = document.getElementById("but");
let display = document.getElementById("display");
let imgtag = document.getElementById("image")

function displaySvalue() {
    let parsed = JSON.parse(this.responseText);
    // display.innerText = parsed.followers;
    display.innerText = this.responseText;
    image.src = parsed.avatar_url;
}
function handleEvent() {
    var xhr = new XMLHttpRequest();
    let Value = getval.value;
    xhr.open("GET", `https://api.github.com/users/${Value}`);
    xhr.send();
    xhr.addEventListener("load", displaySvalue)
}
buttonval.addEventListener("keyup", handleEvent)