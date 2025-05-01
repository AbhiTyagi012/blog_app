const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');
const User = require('./User');

const Blog = sequelize.define('Blog', {
  title: DataTypes.STRING,
  image: DataTypes.STRING,
  description: DataTypes.TEXT,
});

User.hasMany(Blog);
Blog.belongsTo(User);

module.exports = Blog;
