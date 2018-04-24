import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) =>{
	res.json({
		message: 'Welcome to Book-A-Meal App'
	});
});

export default router;