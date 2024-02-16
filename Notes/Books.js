/*
parameter constructor 
	constructor created with parameters is called "Parameter constructor".
	Adv:  used for dynamic initialization of objects, means every object initialized with different data
*/
//creating parameter constructor
	 function Book(name, year, author, price) 
	 {				
		//properties init
		this.name = name;	//property = parameter
		this.year = year;
		this.author = author;
		this.price = price;
	  }