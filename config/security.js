const rateLimit = require("express-rate-limit")
const setup = (app) => {
    //  Defense DoS 
    const apiLimiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100
    });
    app.use("/", apiLimiter);
}
module.exports = setup