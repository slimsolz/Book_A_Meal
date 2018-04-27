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
			id: db.order.length + 1,
			meal_title,
			quantity,
			amount: (350 * quantity),
			delivery_address,
			customerId,
			catererId
		};

		//check if order has bin made already

		db.order.push(new_order);
		return res.status(201).json({
			status: 'success',
			message: 'Order placed Successfully',
			order: new_order
		})

	}

	//Modify order
/*	static modifyOrder(req, res){

	}
*/
	//get all order
/*	static getAllOrders(req, res){

	}*/

}