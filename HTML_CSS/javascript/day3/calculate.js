function calculateSupply(){
	const age = prompt("Input your age");
	const amountPerDay = prompt("Input amount oer day");
	const ttlAmnt = (Number(age * amountPerDay));
	alert(`You will need ${ttlAmnt} to last you until the ripe age of ${age}`)
}
calculateSupply();