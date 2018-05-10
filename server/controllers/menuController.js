import Model from '../models';

const { Menu, Meal } = Model;

export default class MenuController {
	//POST Menu
	static setMenu(req, res){
		const { ids } = req.body;
		const { userId } = req;
		let availableMeals;

		Meal.findAll({}).then((meals) => {
			availableMeals = meals.filter((meal) =>{
				ids.includes(meal.id);
			});
		});
	}
	
	
	//GET Menu
	/*static getMenu(req, res){		
	}*/

	
}


/*

*/