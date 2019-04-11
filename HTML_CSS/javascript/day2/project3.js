var a = 89;
var b = 120;
var c = 103;
var d = 116;
var e = 94;
var f = 123;

var teamJohn = (a+b+c) / 3;
var teamMike = (d+e+f) / 3;

console.log(teamJohn);
console.log(teamMike);
if (teamJohn>teamMike) {
	console.log("Team John wins" + teamJohn);
}
else if{
	console.log("Team Mike wins" + teamMike);
}
else{
	console.log("Result is a tie");
}