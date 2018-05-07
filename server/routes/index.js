import express from 'express';
import db from '../models/dummy-db';
import Middleware from '../middlewares';
import CatererController from '../controllers/catererController';
import CustomerController from '../controllers/customerController';
import MealController from '../controllers/mealController';
import MenuController from '../controllers/menuController';
import OrderController from '../controllers/orderController';
import DashboardController from '../controllers/dashboardController'


const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
  	status: 'success',
    message: 'Welcome to Book-A-Meal App'
  });
});

//Caterers
router.post('/caterer/signup', Middleware.validateSignup, CatererController.signUp );
router.post('/caterer/signin', Middleware.validateSignin, CatererController.signIn);

//Users
router.post('/customer/signup', Middleware.validateSignup, CustomerController.signUp);
router.post('/customer/signin', Middleware.validateSignin, CustomerController.signIn);

//Meals
router.get('/meals', MealController.getMeals);
router.get('/meals/:catererId', MealController.getAllMeals);
router.get('/meals/:catererId/:id', MealController.getMealById);
router.post('/meals', Middleware.validateAddMeal, MealController.addMeal);
router.delete('/meals/:catererId/:id', MealController.deleteMeal);
router.put('/meals/:catererId/:id', Middleware.validateUpdateMeal, MealController.updateMeal);

//Menu
router.post('/menu/:catererId', MenuController.setMenu);
router.get('/menu', MenuController.getMenu);

/*order*/
router.post('/orders', Middleware.validateOrder, OrderController.placeOrder);
router.put('/orders/:orderId', Middleware.validateOrderUpdate, OrderController.modifyOrder);
router.get('/orders/:catererId', OrderController.getAllOrders);

/*Summary*/
router.get('/dashboard/:catererId', DashboardController.getSummary);

// 404
router.get('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Not found'
  });
});

export default router;
