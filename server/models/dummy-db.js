const db = [];

db.caterers = [
	{
	  id: 1,
	  email: 'odumahs@gmail.com',
	  username: 'slimsolz',
	  password: 'slimsolz'
	},
	{
	  id: 2,
	  email: 'solo@ymail.com',
	  username: 'solz',
	  password: 'kobebryant'
	},
];

db.customers = [{
	  id: 1,
	  email: 'user1@gmail.com',
	  username: 'user1',
	  password: 'user1'
	},
	{
	  id: 2,
	  email: 'user2@ymail.com',
	  username: 'user2',
	  password: 'user2'
	},	
];

db.meals = [
	{
		id: 1,
		title: 'Rice with chicken',
		price: 350,
		imageurl: 'images/ricechicken.jpg',
		available: false,
		catererId: 1,
	},
	{
		id: 2,
		title: 'Eba and Efo',
		price: 450,
		imageurl: 'images/ebaEfo.jpg',
		available: true,
		catererId: 2,
	},
	{
		id: 3,
		title: 'Yam And Fried Egg',
		price: 350,
		imageurl: 'images/yamEgg.jpg',
		available: true,
		catererId: 1,
	}
];

export default db;