const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const path = require('path');
const { auth } = require('../utils');

module.exports = (express, app) => {
	app.use(express.static('public'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));

	app.use(cookieParser());

	app.use(auth);

	app.engine(
		'hbs',
		handlebars({
			layoutsDir: 'views',
			defaultLayout: 'main.hbs',
			partialsDir: 'views/partials',
			extname: 'hbs',
		})
	);
	app.set('viewengine', 'hbs');
};
