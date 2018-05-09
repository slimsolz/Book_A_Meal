import Model from '../models';

const { Meal } = Model;


export default class MealController{
	//Add meal
	static addMeal(req, res){
		const { mealName, price, imgpath, available } = req.body;

		//check if meal exists
		Meal.find({ where: { mealName }}).then((meal) => {
			if (meal) {
				return res.status(409).json({
					status: 'error',
					message: 'Meal already exists'
				});
			}
		});

		Meal.create({
			mealName, price, imgpath, available
		}).then((meal) => {
			res.status(201).json({
				status: 'success',
				message: 'Successfully added meal',
				meal
			})
		}).catch((err) => res.status(500).json({
			status: 'error',
			message: err.stack
		}));
	}

	//Delete a meal
	static deleteMeal(req, res){
		Meal.destroy({where: { id: req.params.id}}).then((deleteStatus) => {
			if (!deleteStatus) {
				return res.status(500).json({
					status: 'error',
					message: 'Unable to delete Meal'
				});
			}
			return res.status(200).json({
				status: 'status',
				message: 'Meal Deleted Successfully'
			});
		});
	}

	//Update meal
	static updateMeal(req, res){
		const { mealName, price, imgpath, available } = req.body;
		Meal.findById(req.params.id)
			.then((meal) => {
				if (!meal) {
					return res.status(404).json({
						status: 'error',
						message: 'Meal not found'
					});
				}

				meal.update({
					mealName: mealName || meal.mealName,
					price: price || meal.price,
					imgpath: imgpath || meal.imgpath,
					available: available || meal.available
				}).then((updatedMeal) => {
					if (updatedMeal) {
						return res.status(200).json({
							status: 'success',
							message: 'Meal updated Successfully'
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

	static getMeals(req, res){
		Meal.findAll({}).then((meals) => {
			if (meals.length === 0) {
				return res.status(404).json({
					status: 'error',
					message: 'No meal found'
				});
			}
			return res.status(200).json({
				status: 'success',
				message: 'Meals Found',
				meals
			});
		}).catch((err) => res.status(500).json({
			status: 'error',
			message: 'Server Error'
		}));
	}
}