/**
 * @api {post} /register Create New User
 * @apiName CreateUser
 * @apiGroup User
 * @apiParam {String} [firstname] Firstname of the user
 * @apiParam {String} [lastname] Lastname of the user
 * @apiParam {String} [email] Email 
 * @apiParam {String} [password] Password
 * @apiParam {String} [reapeatPassword] Repeat Password
 * @apiSuccessExample Success-Response:
 *          HTTP/1.1 200 OK
 *         {
 *              "_id": "5e0e880384f07364f2a2c121",
 *              "email": "minhnhat1@gmail.com",
 *              "password": "$2b$10$bxBiuaGxVED6Gknrce/wMeZuKADYV8B9PrZzvWmh/wYXDmJP3zTh2",
 *              "firstname": "nhat",
 *              "lastname": "huynh",
 *              "__v": 0
 *          }
 */

/**
 * @api {post} /login Login 
 * @apiName Login 
 * @apiGroup User
 * @apiParam {String} [email] Email 
 * @apiParam {String} [password] Password
 * @apiSuccessExample Success-Response:
 *          HTTP/1.1 200 OK
 *         {
 *              "_id": "5e0e880384f07364f2a2c121",
 *          }
 */
