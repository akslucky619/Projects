let isGuestOneVeg = false;
let isGeustTwoVeg = false;
if(isGuestOneVeg && isGeustTwoVeg == true){
	console.log("Only offer vegan dishes");
}
else if(isGuestOneVeg || isGeustTwoVeg == true){
	console.log("Make sure to offer up some vegan options");
}
else{
	console.log("Offer up anything in the menu");
}