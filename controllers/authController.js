const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const profileImage = req.file?.filename;
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed, profileImage });
  res.redirect('/login');
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.cookie('token', token).redirect('/dashboard');
  } else {
    res.send('Invalid credentials');
  }
};
