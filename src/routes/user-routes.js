const Router = require("express").Router;

const userController = require("../controllers/user-controller");

const UserRouter = Router();

const { authMiddleware } = require("../middleware/auth-middleware");

UserRouter.use("/users", authMiddleware);
UserRouter.get("/users", userController.getUsers);
UserRouter.get("/users/:userId", userController.getUserDetails);
UserRouter.post("/users/", userController.createUser);
UserRouter.patch("/users/:userId", userController.updateUser);
UserRouter.delete("/users/:userId", userController.deleteUser);

module.exports = UserRouter;
