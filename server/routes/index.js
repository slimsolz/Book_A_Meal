import express from 'express';
import db from '../models/dummy-caterers';
import CatererController from '../controllers/catererController';



const router = express.Router();

router.get('/', (req, res, next) =>{
	res.json({
		message: 'Welcome to Book-A-Meal App',
		caterers: db.caterers
	});
});

router.post('/caterer/signup', CatererController.signUp);
router.post('/caterer/signin', CatererController.signIn);

export default router;