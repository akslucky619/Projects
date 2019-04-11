function calculateDogAge(){
	const puppyAge = prompt("Input dog's age");
	const calc = (Number(puppyAge * 7));
	alert(`Your doggie is ${calc} years old in dog years`);

	const humanAge = prompt("Input human's age in dog years");
	const calc2 = (Number(calc / 7));
	alert(`Human age is ${calc2}`)
}
calculateDogAge();