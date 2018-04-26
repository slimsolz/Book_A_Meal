import express from 'express';
import db from '../models/dummy-db';
import CatererController from '../controllers/catererController';
import CustomerController from '../controllers/customerController';
import MealController from '../controllers/mealController';


const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    message: 'Welcome to Book-A-Meal App',
    caterers: db.caterers
  });
});

//Caterers
router.post('/caterer/signup', CatererController.signUp);
router.post('/caterer/signin', CatererController.signIn);

//meals
router.get('/meals/:catererId', MealController.getAllMeals);
router.get('/meals/:catererId/:id', MealController.getMealById);
router.post('/meals', MealController.addMeal);
router.delete('/meals/:catererId/:id', MealController.deleteMeal);
router.put('/meals/:catererId/:id', MealController.updateMeal);

//Users
router.post('/customer/signup', CustomerController.signUp);
router.post('/customer/signin', CustomerController.signIn);

export default router;
