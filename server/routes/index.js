import express from 'express';
import db from '../models/dummy-db';
import CatererController from '../controllers/catererController';
import CustomerController from '../controllers/customerController';
import MealController from '../controllers/mealController';
import MenuController from '../controllers/menuController';
import OrderController from '../controllers/orderController';


const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
  	status: 'success',
    message: 'Welcome to Book-A-Meal App',
    caterers: db.caterers
  });
});

//Caterers
router.post('/caterer/signup', CatererController.signUp);
router.post('/caterer/signin', CatererController.signIn);

//Users
router.post('/customer/signup', CustomerController.signUp);
router.post('/customer/signin', CustomerController.signIn);

//Meals
router.get('/meals/:catererId', MealController.getAllMeals);
router.get('/meals/:catererId/:id', MealController.getMealById);
router.post('/meals', MealController.addMeal);
router.delete('/meals/:catererId/:id', MealController.deleteMeal);
router.put('/meals/:catererId/:id', MealController.updateMeal);

//Menu
router.post('/menu/:catererId', MenuController.setMenu);
router.get('/menu', MenuController.getMenu);

/*order*/
router.post('/orders', OrderController.placeOrder);

// 404
router.get('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Not found'
  });
});

export default router;
