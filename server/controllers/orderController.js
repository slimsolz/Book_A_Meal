import db from '../models/dummy-db';

export default class OrderController{
	//place Order
	static placeOrder(req, res){
		const { meal_title, quantity, delivery_address, customerId, catererId } = req.body;

		if (!meal_title || !quantity || !delivery_address || !customerId || !catererId) {
			return res.status(400).json({
				status: 'error',
				message: 'All fields are required'
			});
		}

		const new_order = {
			id: db.orders.length + 1,
			meal_title,
			quantity,
			amount: (350 * quantity),
			delivery_address,
			time_placed: new Date(),
			customerId,
			catererId
		};

		//check if order has bin made already

		db.orders.push(new_order);
		return res.status(201).json({
			status: 'success',
			message: 'Order placed Successfully',
			order: new_order
		});
	}

	//Modify order
	static modifyOrder(req, res){
		const orderId = parseInt(req.params.orderId, 10);
		let orderFound;
		let itemIndex;

		//Find order in db
		db.orders.map((order, index) =>{
			if (order.id === orderId) {
					orderFound = order;
					itemIndex = index;
			}
		});

		//if order not found
		if (!orderFound) {
			return res.status(400).json({
				status: 'error',
				message: 'order not found'
			});
		}

		const { meal_title, quantity, delivery_address } = req.body;

		if (!meal_title || !quantity || !delivery_address) {
			return res.status(400).json({
				status: 'error',
				message: 'All fields are required'
			});
		}

		const modified_order = {
			id: orderFound.id,
			meal_title: meal_title || orderFound.meal_title,
			quantity: quantity || orderFound.quantity,
			amount: (350 * quantity),
			delivery_address: delivery_address || orderFound.delivery_address,
			time_placed: new Date(),
			customerId: orderFound.customerId,
			catererId: orderFound.catererId
		};

		db.meals.splice(itemIndex, 1, modified_order);
		return res.status(201).json({
			status: 'success',
			message: 'Order Modified and Placed Successfully',
			order: modified_order
		});
	}

	//get all order
	static getAllOrders(req, res){
		const catererId = parseInt(req.params.catererId, 10);

		let filteredOrders = db.orders.filter((order) => order.catererId === catererId);
		return res.status(200).json({
			status: 'success',
			message: 'All Orders',
			orders: filteredOrders
		});
	}

}