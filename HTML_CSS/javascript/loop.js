const SPENDING_THRESHOLDS = 200;
const TAX_RATES = 0.08;
const PHONE_PRICES = 99.99;
const ACCESSORY_PRICES = 9.99;
var bank_balance = 303.91;
var amount = 0;
amount = PHONE_PRICES + ACCESSORY_PRICES;
taxAmount = amount * TAX_RATES;
amount = taxAmount + amount;
ttl_amt = 0;
tax_amt = 0;
function loops(){
	while(amount<bank_balance && amount<SPENDING_THRESHOLDS){
		bank_balance = bank_balance - amount;
		ttl_amt = amount + amount;
		tax_amt = taxAmount + taxAmount;
	}
	console.log(`Total amount of purchase is $${ttl_amt.toFixed(2)}`)
	console.log(`Total amount of tax is $${tax_amt.toFixed(2)}`)
}	console.log(`Total Bank balace is $${bank_balance.toFixed(2)}`)
loops();