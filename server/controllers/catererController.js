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

		 const newCaterer = {
		 	id: db.caterers[db.caterers.length - 1].id + 1,
		 	email,
		 	username,
		 	password
		 };

		 //check if email already exist
		 const caterer = db.caterers.find((caterer) => caterer.email === email);
		 if (caterer) {
			return res.status(400).json({
	 			status: 'error',
	 			message: 'A Caterer with that email already exists'
	 		});
		 }
		 		
		 	
		 db.caterers.push(newCaterer);
		 return res.status(201).json({
		 	status: 'success',
		 	message: 'Caterer created successfully',
		 	caterer: newCaterer
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

    const caterer = db.caterers.find((caterer) => username === caterer.username && password === caterer.password);

    if (caterer) {
			return res.status(200).json({
      	status: 'success',
	 			message: 'Login successful',
	 		});
    }

    return res.status(400).json({
    	status: 'error',
		 	message: 'Wrong username/password',
		 });
  }
}
