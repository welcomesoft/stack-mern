const user_controller = {};


user_controller.getUsers = (req, res) => res.json({ users: [] });
user_controller.createUser = (req, res) => res.json({ message: "User was created succesfull" });

user_controller.getUser = (req, res) => res.json({ user: "Dario Welcome" });
user_controller.updateUser = (req, res) => res.json({ message: "User was updated succesfull" });
user_controller.deleteUser = (req, res) => res.json({ message: "User was deleted succesfull" });

module.exports = user_controller;
