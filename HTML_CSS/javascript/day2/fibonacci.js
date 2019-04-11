function fib(){
var a = 1, b = 2, next = a+b;
var sum = 0;
while(b<4000000){
	if (b%2 === 0){
		sum += b;
	}
	a = b;
	b = next;
	next = a+b;
  }
}
fib();