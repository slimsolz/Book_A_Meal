const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;

//log request to console
app.use(logger('dev'));

//parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) =>{
	res.json({
		message: 'Welcome To Book-A-Meal App'
	});
})

app.listen(port, () =>{
	console.log(`App started on port ${port}`)
})

module.exports = app;
