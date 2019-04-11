function fact(){
	var x = 10;

	if (x == 0) {
		return 1;
	}
	else if (x<0) {
		return undefined;
	}
	else {
		(i = x; --i)
		x = x*i;
	}
}
fact();