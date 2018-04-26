import db from '../models/dummy-db';

export default class CatererController {
  static signUp(req, res) {
		 const { email, username, password } = req.body;

		 if (!email || !username || !password) {
		 	return res.status(400).json({
		 		status: 'error',
		 		message: 'Input Email, username and Password',
		 	});
		 }

		 const caterer = {
		 	id: db.caterers.length + 1,
		 	email,
		 	username,
		 	password
		 };

		 //check if email already exist
		 db.caterers.forEach((caterer) => {
		 	if (caterer.email === email) {
		 		return res.status(400).json({
		 			status: 'error',
		 			message: 'A Caterer with that email already exists'
		 		});
		 	}
		 });

		 db.caterers.push(caterer);
		 return res.status(201).json({
		 	status: 'success',
		 	message: 'Caterer created successfully',
		 	caterers: db.caterers
		 });
  }

  static signIn(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
      	status: 'error',
		 		message: 'Input valid username and Password',
		 	});
    }

    db.caterers.forEach((caterer) => {
      if (username === caterer.username && password === caterer.password) {
        return res.status(200).json({
        	status: 'success',
		 			message: 'Login successful',
		 		});
      }
    });

    return res.status(400).json({
    	status: 'error',
		 	message: 'Wrong username/password',
		 });
  }
}
