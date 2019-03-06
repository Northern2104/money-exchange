// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   	let exchange = {};
	let h = (currency-currency%50)/50;
	let q = (currency%50-currency%50%25)/25;
	let d = (currency%50%25-currency%50%25%10)/10;
	let n = (currency%50%25%10-currency%50%25%10%5)/5;
	let p = (currency%50%25%10%5)/1;
	if(h>0){exchange["H"]=h};
	if(q>0){exchange["Q"]=q};
	if(d>0){exchange["D"]=d};
	if(n>0){exchange["N"]=n};
	if(p>0){exchange["P"]=p};
	if(currency>10000){
		exchange={error: "You are rich, my friend! We don't have so much coins for exchange"}
	};
	return exchange;
}
