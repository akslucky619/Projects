let text = document.getElementById("input-text");
let ptext = document.getElementById("fact-text")

text.addEventListener("input", getfact)

function getfact() {
    let textValue = text.value;
    fetch(`http://numbersapi.com/${textValue}/year`).then(res => res.text())
    .then(data => {
        if (textValue != '') {
        // console.log(data);
        ptext.style.display = "block";
        ptext.innerText = data;
    }
})
    .catch(err => alert(err));
}