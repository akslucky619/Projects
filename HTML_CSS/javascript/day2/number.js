function display(){
	let num = prompt("Input number");
	if (num<0) {
		console.log(Number(num))
	}
	else{
		console.log("Not a negative number")
	}
}
display();