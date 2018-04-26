import db from '../models/dummy-db';

export default class MenuController {
	//POST Menu
	static setMenu(req, res){
		const catererId = parseInt(req.params.catererId, 10);
		const { title } = req.body;

		if (!title) {
			return res.status(400).json({
				status: 'error',
				message: 'title is required'
			});
		}

		const menu = {
			id: db.menu.length + 1,
			catererId,
			title			
		}

		//add to db menu
		db.menu.push(menu);
		return res.status(201).json({
		 	status: 'success',
		 	message: 'menu set successfully',
		 	title: db.menu
		 });
	}
	
	
	//GET Menu
	static getMenu(req, res){		
		const title = [];

		db.menu.forEach((meal) =>{
			title.push(meal.title);
		});

		return res.status(200).json({
			status: 'success',
			message: 'All Meals',
			menu: title
		});
	}

	
}