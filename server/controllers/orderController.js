import Model from '../models';

const { Order, Meal } = Model;

export default class OrderController{
	//place Order
	static placeOrder(req, res){
		const { quantity, total, deliveryAddress, status } = req.body;
		const { userId } = req;
		const mealId = 4;

		Order.create({
			quantity, total, deliveryAddress, status, userId, mealId
		}).then((order) => {
			res.status(201).json({
				status: 'success',
				message: 'Order placed Successfully',
				order
			})
		}).catch((err) => {
			res.status(500).json({
				status: 'error',
				message: 'Server error'
			});
		});		
	}

}