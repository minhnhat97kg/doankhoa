module.exports = (app) => {
    console.log("Router initilizing ....")
    app.use('/', require('../models/auth'));
    app.use('/user', require('../models/user'));
}
