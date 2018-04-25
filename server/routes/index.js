import express from 'express';
import db from '../models/dummy-db';
import CatererController from '../controllers/catererController';
import CustomerController from '../controllers/customerController';


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

//Users
router.post('/customer/signup', CustomerController.signUp);
router.post('/customer/signin', CustomerController.signIn);

export default router;
