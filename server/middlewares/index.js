import validator from 'validator';
import isEmpty from 'lodash.isempty';
import jwt from 'jsonwebtoken';
import isInt from 'validator/lib/isInt';


export default class Middleware {

	static isLoggedIn(req, res, next) {
    const token = req.body.token || req.query.token || req.get('Authorization').slice(7);
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: 'error',
          message: 'User not logged in'
        });
      }
      req.userId = decoded.id;
      return next();
    });
  }

  static validParam(req, res, next) {
    const reqId = req.params.id;
    const id = isInt(reqId);
    if (!id) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid params'
      });
    }
    next();
  }

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
		const { storeName, username, email, password, phone_no, address, img_path } = req.body;
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
	    mealName, price, imgpath, available  } = req.body;
 
	  if (!mealName || (mealName && validator.isEmpty(mealName.trim()))) {
	    error.mealName = 'Meal name is required';
	  }

	  if (!price) {
	    error.price = 'Meal price is required';
	  }

	  if (price && isNaN(price)) {
	    error.price = 'Meal price must be numbers';
	  }

	  if (!imgpath || (imgpath && validator.isEmpty(imgpath.trim()))) {
	    error.imgpath = 'Meal image url is required';
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
		const { mealName, price, imgpath, available  } = req.body;
 
	  if (!mealName || (mealName && validator.isEmpty(mealName.trim()))) {
	    error.mealName = 'Meal name is required';
	  }

	  if (!price) {
	    error.price = 'Meal price is required';
	  }

	  if (price && isNaN(price)) {
	    error.price = 'Meal price must be numbers';
	  }

	  if (!imgpath || (imgpath && validator.isEmpty(imgpath.trim()))) {
	    error.imgpath = 'Meal image url is required';
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
		const { quantity, total, deliveryAddress, status } = req.body;
		const error = {};


	  if (!quantity) {
	    error.quantity = 'quantity is required';
	  }

	  if (quantity && isNaN(quantity)) {
	    error.quantity = 'quantity must be numbers';
	  }

	  if (!deliveryAddress || (deliveryAddress && validator.isEmpty(deliveryAddress.trim()))) {
	    error.deliveryAddress = 'deliveryAddress is required';
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
		const { quantity, total, deliveryAddress, status } = req.body;
		const error = {};


	  if (!quantity) {
	    error.quantity = 'quantity is required';
	  }

	  if (quantity && isNaN(quantity)) {
	    error.quantity = 'quantity must be numbers';
	  }

	  if (!deliveryAddress || (deliveryAddress && validator.isEmpty(deliveryAddress.trim()))) {
	    error.deliveryAddress = 'deliveryAddress is required';
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