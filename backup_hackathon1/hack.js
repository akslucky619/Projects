var teams = [
    {name: "Chennai", strength: 95},
    {name: "Mumbai", strength: 90}, 
    {name: "Kolkata", strength: 85}, 
    {name: "Hyderabad", strength: 85}, 
    {name: "Punjab", strength: 60}, 
    {name: "Delhi", strength: 55}, 
    {name: "Rajasthan", strength: 65}, 
    {name: "Bangalore", strength: 40}
    ];

    // const team = {
    //     csk: "Chennai",
    //     mi: "Mumbai",
    //     kkr: "Kolkata",
    //     srh: "Hyderabad",
    //     kxip: "Punjab",
    //     dc: "Delhi",
    //     rr: "Rajasthan", 
    //     rcb: "Bangalore"
    // }

    // var sst = [];

    // var input1 = document.querySelector(".inputval1");
    // var input2 = document.querySelector(".inputval2");
    // input1.value = "";
    // input2.value = "";

    // function assign(e) {
    //     if (e.target.innerText === "CSK")
    //     console.log(input1.value = teams[0].Name);
    // }
    // document.querySelectorAll("button").addEventListener("click", assign)

let csk = document.getElementById('csk');
let mi = document.getElementById('mi');
let kkr = document.getElementById('kkr');
let srh = document.getElementById('srh');
let kxip = document.getElementById('kxip');
let dc = document.getElementById('dc');
let rr = document.getElementById('rr');
let rcb = document.getElementById('rcb');
let val1 = document.querySelector('.inputval1');
let val2 = document.querySelector('.inputval2');
let checkPre = document.getElementById('predict');
let team1Strength;
let team2Strength;


// add team to the input box
function addTeam(e) {
    console.dir(e.target)
    let buttClicked = e.target.innerText;
    if (val1.value === '') {
        val1.value = buttClicked;
    }
    else{
        val2.value = buttClicked;
    }
}

// function to globally run execute the code & enters input on button click event

// calculates score
function calc1() {
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name === val1.value){
            team1Strength = teams[i].strength;
        }
    }
}

function calc2() {
    for (let i = 0; i < teams.length; i++) {
        if (teams[i].name === val2.value){
            team2Strength = teams[i].strength;
        }
    }
}

function difference() {
    var para = document.getElementById('para');
    if (team1Strength > team2Strength) {
        let p1 =document.createElement('p')
        p1.innerText = `"${val1.value} has a higher chance of victory"`;
        para.appendChild(p1);
    }
    else if(team1Strength === team2Strength){
        let p2 =document.createElement('p')
        p2.innerText = 'Both have an equal chance at victory';
        para.appendChild(p2);
    }
    else{
        let p3 =document.createElement('p')
        p3.innerText = `"${val2.value} has a higher chance of victory"`;
        para.appendChild(p3)
    } 
}



// let csk = document.getElementById('csk');
var buttonVal = csk.addEventListener('click', addTeam);
console.log(buttonVal);
mi.addEventListener('click', addTeam);
kkr.addEventListener('click', addTeam);
srh.addEventListener('click', addTeam);
kxip.addEventListener('click', addTeam);
dc.addEventListener('click', addTeam);
rr.addEventListener('click', addTeam);
rcb.addEventListener('click', addTeam);
checkPre.addEventListener('click',()=>{
    calc1();
    calc2();
    difference();
});






    
