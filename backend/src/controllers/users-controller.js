const user_model = require('../models/user-model');
const user_controller = {};


user_controller.getUsers = async (req, res) => {
    const users = await user_model.find();
    res.json(users);
};

user_controller.createUser = async (req, res) => {
    const { username } = req.body;
    const User = new user_model({username});
    await User.save();
    res.json({ message: "User was created succesfull" });
};

user_controller.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await user_model.findById(id);
    res.json(user);
};

user_controller.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username } = req.body;
    await user_model.findOneAndUpdate(id, username);
    res.json({ message: "User was updated succesfull" });
};

user_controller.deleteUser = async (req, res) => {
    const { id } = req.params;
    await user_model.findByIdAndDelete(id);
    res.json({ message: "User was deleted succesfull" });
};

module.exports = user_controller;
