var input = prompt("Input number");
var num1 = 1;
var num2 = 0;
function disTable(){
	while(num1<11){
		num2 = num1 * input;
		num1++;
		console.log(num2)
	}
}
disTable();