module.exports = (app) => {
	console.log('Router initilizing ....')
	app.use('/', require('../routes/auth.route'))
	app.use('/user', require('../routes/student.route'))
	app.use('/events', require('../routes/event.route'))
	app.use('/form', require('../routes/form.route'))
}
