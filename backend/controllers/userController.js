const user = require('../models/userModel');    

// login user
const loginUser = async (req, res) => {
  res.json({ mssg: 'login user' });
};

// login user
const signupUser = async (req, res) => {
  res.json({ mssg: 'signup user' });
};

module.exports = { loginUser, signupUser };
