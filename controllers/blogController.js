const Blog = require('../models/Blog');
const { Comment, Reply } = require('../models');

exports.getDashboard = async (req, res) => {
  const blogs = await Blog.findAll({ where: { UserId: req.user.id } });
  res.render('dashboard', { blogs, user: req.user });
};

exports.createBlog = async (req, res) => {
  const { title, description } = req.body;
  const image = req.file?.filename;
  await Blog.create({ title, description, image, UserId: req.user.id });
  res.redirect('/dashboard');
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findByPk(req.params.id);
  blog.title = req.body.title;
  blog.description = req.body.description;
  if (req.file) blog.image = req.file.filename;
  await blog.save();
  res.redirect('/dashboard');
};

exports.deleteBlog = async (req, res) => {
  await Blog.destroy({ where: { id: req.params.id } });
  res.redirect('/dashboard');
};

exports.renderEditForm = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).send("Blog not found");
    res.render('editBlog', { blog });
  } catch (err) {
    res.status(500).send("Server error");
  }
};

