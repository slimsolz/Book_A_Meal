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

	//Modify order
	static modifyOrder(req, res){
		const { quantity, total, deliveryAddress, status } = req.body;
		const { userId } = req;
		const mealId = 4;


		Order.findById(req.params.id)
			.then((order) => {
				console.log(order.status)
				if (!order) {
					return res.status(404).json({
						status: 'error',
						message: 'Order not found'
					});
				}
				if (order.status === 'Approved' || order.status === 'In Process' ) {
					return res.status(404).json({
						status: 'error',
						message: 'Order cannot be modified'
					});
				}
				order.update({
					quantity: quantity || order.quantity,
					total: total || order.total,
					deliveryAddress: deliveryAddress || order.deliveryAddress,
					status: status || order.status,
					userId,
					mealId
				}).then((updatedOrder) => {
					if (updatedOrder) {
						return res.status(200).json({
							status: 'success',
							message: 'Order updated Successfully',
							updatedOrder: {
								quantity: updatedOrder.quantity,
								total: updatedOrder.total,
								address: updatedOrder.deliveryAddress,
								status: updatedOrder.status
							}
						});
					}
				});
			}).catch((err) => {
				return res.status(500).json({
					status: 'error',
					message: 'Server Error'
				});
			});
	}

	//get all order
	static getAllOrders(req, res){
		Order.findAll({}).then((orders) => {
			if (orders.length === 0) {
				return res.status(404).json({
					status: 'error',
					message: 'No order found'
				});
			}
			return res.status(200).json({
				status: 'success',
				message: 'Orders Found',
				orders
			});
		}).catch((err) => res.status(500).json({
			status: 'error',
			message: 'Server Error'
		}));
	}

}