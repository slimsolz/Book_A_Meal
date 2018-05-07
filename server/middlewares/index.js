import validator from 'validator';
import isEmpty from 'lodash.isempty';


export default class Middleware {

	static validateSignin(req, res, next){
		const { username, password } = req.body;
		const error = {};

		if (!username || (username && validator.isEmpty(username.trim()))) {
	    error.username = 'username is required';
	  }

	  if (!password || (password && validator.isEmpty(password.trim()))) {
	    error.password = 'password is required';
	  }

	  if (isEmpty(error)) {
	    return next();
	  }

	  return res.status(400).json({
	    status: 'error',
	    error,
	  });
	}

	static validateSignup(req, res, next){
		const { email, username, password } = req.body;
		const error = {};

		if (!email || (email && !validator.isEmail(email))) {
			error.email = 'email is required';
		}

		if (!username || (username && validator.isEmpty(username.trim()))) {
	    error.username = 'username is required';
	  }

	  if (!password || (password && validator.isEmpty(password.trim()))) {
	    error.password = 'password is required';
	  }

	  if (isEmpty(error)) {
	    return next();
	  }

	  return res.status(400).json({
	    status: 'error',
	    error,
	  });
	}

	static validateAddMeal(req, res, next){
		const error = {};
	  const {
	    title, price, imageurl, available, catererId
	  } = req.body;
 
	  if (!title || (title && validator.isEmpty(title.trim()))) {
	    error.title = 'Meal name is required';
	  }

	  if (!price) {
	    error.price = 'Meal price is required';
	  }

	  if (price && isNaN(price)) {
	    error.price = 'Meal price must be numbers';
	  }

	  if (!imageurl || (imageurl && validator.isEmpty(imageurl.trim()))) {
	    error.imageurl = 'Meal image url is required';
	  }

	  if (!catererId) {
	    error.catererId = 'Caterer Id is required';
	  }

	  if (catererId && isNaN(catererId)) {
	    error.catererId = 'catererId must be numbers';
	  }

	  if (isEmpty(error)) {
	    return next();
	  }

	  return res.status(400).json({
	    status: 'error',
	    error,
	  });
	}

	static validateUpdateMeal(req, res, next){
		const error = {};

		const id = parseInt(req.params.id, 10);
		const catererId = parseInt(req.params.catererId, 10);		
		const { title, price, imageurl } = req.body;
 
	  if (!title || (title && validator.isEmpty(title.trim()))) {
	    error.title = 'Meal name is required';
	  }

	  if (!price) {
	    error.price = 'Meal price is required';
	  }

	  if (price && isNaN(price)) {
	    error.price = 'Meal price must be numbers';
	  }

	  if (!imageurl || (imageurl && validator.isEmpty(imageurl.trim()))) {
	    error.imageurl = 'Meal image url is required';
	  }

		if (isEmpty(error)) {
	    return next();
	  }

	  return res.status(400).json({
	    status: 'error',
	    error,
	  });
	}

	static validateOrder(req, res, next){
		const { meal_title, quantity, delivery_address, customerId, catererId } = req.body;
		const error = {};

		if (!meal_title || (meal_title && validator.isEmpty(meal_title.trim()))) {
	    error.meal_title = 'Meal name is required';
	  }

	  if (!quantity) {
	    error.quantity = 'quantity is required';
	  }

	  if (quantity && isNaN(quantity)) {
	    error.quantity = 'quantity must be numbers';
	  }

	  if (!delivery_address || (delivery_address && validator.isEmpty(delivery_address.trim()))) {
	    error.delivery_address = 'delivery_address is required';
	  }

	  if (!customerId) {
	    error.customerId = 'customer Id is required';
	  }

	  if (customerId && isNaN(customerId)) {
	    error.customerId = 'customer Id must be numbers';
	  }

	  if (!catererId) {
	    error.catererId = 'Caterer Id is required';
	  }

	  if (catererId && isNaN(catererId)) {
	    error.catererId = 'caterer Id must be numbers';
	  }

		if (isEmpty(error)) {
	    return next();
	  }

	  return res.status(400).json({
	    status: 'error',
	    error,
	  });
	}

	static validateOrderUpdate(req, res, next){
		const { meal_title, quantity, delivery_address } = req.body;
		const error = {};

		if (!meal_title || (meal_title && validator.isEmpty(meal_title.trim()))) {
	    error.meal_title = 'Meal name is required';
	  }

	  if (!quantity) {
	    error.quantity = 'quantity is required';
	  }

	  if (quantity && isNaN(quantity)) {
	    error.quantity = 'quantity must be numbers';
	  }

	  if (!delivery_address || (delivery_address && validator.isEmpty(delivery_address.trim()))) {
	    error.delivery_address = 'delivery_address is required';
	  }

	  if (isEmpty(error)) {
	    return next();
	  }

	  return res.status(400).json({
	    status: 'error',
	    error,
	  });
	}


}