module.exports = (app) => {
	app.use((req, res, next) => {
		const error = new Error('Not found')
		error.status = 404
		next(error)
	})
	app.use(function (err, req, res, next) {
		// set locals, only providing error in development
		const { statusCode, message } = err
		res.status(statusCode || 500).json({
			status: 'error',
			statusCode,
			message,
		})
	})
}
