const db = [];

/*Caterer DB*/
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

/*Customer DB*/
db.customers = [
	{
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

/*Meals DB*/
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

/*Menu DB*/
db.menu = [
	{
		id: 1,
		catererId: 1,
		title: 'Rice and Chicken',
	},
	{
		id: 2,
		catererId: 2,
		title: 'Eba And Efo',
	},
	{
		id: 3,
		catererId: 1,
		title: 'Yam And Fried Egg',
	}
];

/*Order DB*/
db.orders = [
	{
		id: 1,
		meal_title: 'Rice And Chicken',
		quantity: 2,
		amount: 700,
		delivery_address: 'house 33 ikeji',
		customerId: 1,
		catererId: 1
	},
	{
		id: 2,
		meal_title: 'Eba And Efo',
		quantity: 3,
		amount: 1050,
		delivery_address: 'c close festac',
		customerId: 2,
		catererId: 2
	},
	{
		id: 3,
		meal_title: 'Yam And Fried Egg',
		quantity: 3,
		amount: 1050,
		delivery_address: 'house 33 ikeji',
		customerId: 1,
		catererId: 1
	},
]

export default db;
