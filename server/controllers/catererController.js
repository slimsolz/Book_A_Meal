import db from '../models/dummy-caterers';

export default class CatererController{

	static signUp(req, res){
		 const { email, username, password } = req.body;

		 if (!email || !username || !password) {
		 	return res.status(400).json({
		 		message: 'Input Email, username and Password',
		 	});
		 }

		 const caterer = {
		 	id: db.caterers.length + 1,
		 	email,
		 	username,
		 	password
		 }

		 db.caterers.forEach((caterer) =>{
		 	if (caterer.email === email) {
		 		return res.status(400).json({
		 			message: 'A Caterer with that email already exists'
		 		});
		 	}
		 });

		 db.caterers.push(caterer);
		 return res.status(201).json({
		 	message: 'Caterer created successfully',
		 	caterers: db.caterers
		 });
	}

	static signIn(req, res){
		const { username, password } = req.body;

		if (!username || !password) {
			return res.status(400).json({
		 		message: 'Input valid username and Password',
		 	});
		}

		db.caterers.forEach((caterer) =>{
			if (username === caterer.username || password === caterer.password) {
				return res.status(200).json({
		 			message: 'Login successful',
		 		});
			}
		});

		return res.status(400).json({
		 	message: 'Unable to log in',
		 });
	}
}
