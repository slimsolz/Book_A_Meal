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

		 db.caterers.push(caterer);
		 return res.status(201).json({
		 	message: 'Caterer created successfully',
		 	caterers: db.caterers
		 });
	}
}
