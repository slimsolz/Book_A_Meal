import db from '../models/dummy-db';

export default class MealController{
	//Add meal
	static addMeal(req, res){
		const { title, price, imageurl, available, catererId } = req.body;

		if (!title || !price || !imageurl) {
			return res.status(400).json({
				status: 'error',
				message: 'Value title, price and image are required'
			});
		}

		const meal = {
			id: db.meals.length + 1,
			title,
			price,
			imageurl,
			available: available || false,
			catererId
		};

		//check if meal exists
		db.meals.forEach((meal) =>{
			if (meal.catererId === catererId && meal.title === title) {
				return res.status(400).json({
					status: 'error',
					message: 'Meal already exists'
				});
			}
		});

		db.meals.push(meal);
		return res.status(201).json({
			status: 'success',
			message: 'Successfully added meal',
			meals: db.meals
		});
	}

	//Delete a meal
	static deleteMeal(req, res){
		const id = parseInt(req.params.id, 10);
		const catererId = parseInt(req.params.catererId, 10);
		let mealFound;
		let itemIndex;

		//Find meal in db
		db.meals.map((meal, index) =>{
			if (meal.catererId === catererId) {
				if (meal.id === id) {
					mealFound = meal;
					itemIndex = index;
				}
			}
		});

		//if meal not found
		if (!mealFound) {
			return res.status(400).json({
				status: 'error',
				message: 'Meal not found'
			});
		}

		//if meal found
		db.splice(itemIndex, 1);
		return res.status(200).json({
			status: 'success',
			message: 'Meal deleted Successfully'
		});	
	}

	//Update meal
	static updateMeal(req, res){
		const id = parseInt(req.params.id, 10);
		const catId = parseInt(req.params.catererId, 10);
		let mealFound;
		let itemIndex;

		//Find meal in db
		db.meals.map((meal, index) =>{
			if (meal.catererId === catId) {
				if (meal.id === id) {
					mealFound = meal;
					itemIndex = index;
				}
			}
		});

		//if meal not found
		if (!mealFound) {
			return res.status(400).json({
				status: 'error',
				message: 'Meal not found'
			});
		}

		const { title, price, imageurl, available, catererId } = req.body;

		if (!title || !price || !imageurl) {
			return res.status(400).json({
				status: 'error',
				message: 'Value title, price and image are required'
			});
		}

		const updatedMeal = {
			id: mealFound.id,
			title: title || mealFound.title,
			price: price || mealFound.price,
			imageurl,
			available: available || false,
			catererId: mealFound.catererId
		};

		db.meals.splice(itemIndex, 1, updatedMeal);
		return res.status(201).json({
			status: 'success',
			message: 'Meal Updated Successfully',
			updatedMeal
		});

	}

	//get all meals for a particular Caterer
	static getAllMeals(req, res){
		const catererId = parseInt(req.params.catererId, 10);

		let filteredMeals = db.meals.filter((meal) => meal.catererId === catererId);
		return res.status(200).json({
			status: 'success',
			message: 'All Meals',
			meals: filteredMeals
		});
	}

	//get meal by id for a particular Caterer
	static getMealById(req, res){
		const id = parseInt(req.params.id, 10);
		const catererId = parseInt(req.params.catererId, 10);

		db.meals.map((meal) =>{
			if (meal.catererId === catererId && meal.id === id) {
				return res.status(200).json({
					status: 'success',
					message: 'Meal Retrieved Successfully',
					meal
				});
			}
		});
		return res.status(404).json({
			status: 'error',
			message: 'Meal Not Found'
		});
	}

}