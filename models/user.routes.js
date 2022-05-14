import UserController from "./user.controller.js";
const userController = new UserController();
async function userRoutes(router) {
    router.get("/api/find", userController.details);
}
export default userRoutes;
