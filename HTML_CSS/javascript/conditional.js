function condition(){
	var num1 = prompt("Give first number");
	var num2 = prompt("Give second number");
	var num3 = prompt("Give number three");
	var cal = num1 * num2 * num3 ;

	if (cal<0){
		alert("Product is negative");
	}
	else {
		alert("Product is positive");
	}
}

condition();