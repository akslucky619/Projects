function isVowel(){
	var vowel = prompt("Enter a character");
	if (vowel !== "A" || "E" || "I" || "O" || "U") {
		alert("Is not a vowel");
	}
	else{
		alert("Is a vowel");
	}
}
isVowel();