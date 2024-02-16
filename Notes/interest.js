//defining a function for calculating simple interest amount
function getAmount()
{
	let p, t, r, si, tamt;	//local vars
	p = pamt.value;		//data coll from input eles
	t = time.value;
	r = roi.value;
	//calc's
	si = p*t*r/100;
	tamt = parseFloat(p)+si;
	//display op's
	interest.value="Interest Amount :"+si;
	totalAmt.value="Total Amount		:"+tamt;
}