import db from '../models/dummy-db';

export default class customerController{

	static signUp(req, res){
		 const { email, username, password } = req.body;

		 if (!email || !username || !password) {
		 	return res.status(400).json({
		 		status: 'error',
		 		message: 'Input Email, username and Password',
		 	});
		 }

		 const newCustomer = {
		 	id: db.customers.length + 1,
		 	email,
		 	username,
		 	password
		 }

		 const customer = db.customers.find((customer) => customer.email === email);
		 if (customer) {
		 	return res.status(400).json({
		 			status: 'error',
		 			message: 'A customer with that email already exists'
		 		});
		 }
		 		

		 db.customers.push(newCustomer);
		 return res.status(201).json({
		 	status: 'success',
		 	message: 'customer created successfully',
		 	customers: db.customers
		 });
	}

	static signIn(req, res){
		const { username, password } = req.body;
		if (!username || !password) {
			return res.status(400).json({
				status: 'error',
		 		message: 'Input valid username and Password',
		 	});
		}
		
		const customer = db.customers.find((customer) => username === customer.username && password === customer.password);
		if (customer) {
			return res.status(200).json({
				status: 'success',
	 			message: 'Login successful',
	 		});
		}

		return res.status(400).json({
				status: 'error',
			 	message: 'Unable to log in',
			});
				
	}
}
