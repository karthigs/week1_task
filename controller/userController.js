const User = require('../schema/user');

//Get Method
const getUsers = async (req, res) => {
    const users = await User.find({});
    res.json({ users: users });
};

//Get By ID
const getUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
    res.json({ user: user });
}

//Post Method

const createUser = async (req, res) => {
    const user = new User(req.body);
    user.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
    });
};

//Post Method
const updateUser = async (req, res) => {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true });
    res.json({ user: user });
}
//Delete Method
const deleteUser = async (req, res) => {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    res.json({ user: user });
}
module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }