/*
Constructor
		types: 
			> non-parameter constructor 
			> parameter constructor 

Non-parameter constructor 
	constructor created without any parameter is called Non-parameter constructor.
	Adv: used for static initialization of objects, means each and every object was initialized with the same data	
*/
//creating non-parameter constructor
  function Book()  
  {				
	//properties init
    this.name = "C Prog";  
    this.year = 2021;
	this.author = "DR"
	this.price = 340;
  }