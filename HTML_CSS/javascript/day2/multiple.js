var num = 0;
var add = 0;
function multiple(){
	while(num<1000){
		num++;
		if (num % 3 === 0 && num % 5 === 0) {
			add = add + num;
		}
		// else{
		// 	console.log("error");
		// }
	}
	console.log(add);
}
multiple();