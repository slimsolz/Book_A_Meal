/*import db from '../models/dummy-db';*/

export default class DashboardController{
	static getSummary(req, res){
		const catererId = parseInt(req.params.catererId, 10);
		let total_money = 0;

		let filtered = db.summary.filter((detail) => detail.catererId === catererId);	
		

		/*get total for the day*/
		filtered.forEach((summary) =>{
			total_money += summary.amount;
		});

		return res.status(200).json({
			status: 'success',
			message: 'Dashboard',
			summary: filtered,
			/*order_details: ,*/
			total_money_made: total_money
		});
	}
}