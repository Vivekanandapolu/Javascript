import httpStatusCode from 'http-status-codes';
import userModel from './user.model.js';
class UserController {
    async details(request, response) {
        try {
            let user = await userModel.find();
            if (user) {
                response.send(user);
            }
            else {
                response.send(httpStatusCode.INTERNAL_SERVER_ERROR);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}
export default UserController;