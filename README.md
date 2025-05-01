# blog_app

Node.js Blog App with MySQL
===========================

A simple full-stack blogging platform using Node.js, Express.js, MySQL, and EJS. Features user authentication, blog CRUD operations, file uploads, and modal-based blog viewing.

---------------------------
Features
---------------------------
- User Signup/Login with profile image
- JWT Authentication
- Dashboard with user profile and blog list
- Blog CRUD: Create, Read, Update, Delete
- Image uploads for profile and blogs
- View blog description in Bootstrap modal

---------------------------
Tech Stack
---------------------------
- Backend: Node.js, Express.js
- Frontend: EJS, Bootstrap
- Database: MySQL
- ORM: Sequelize
- Authentication: JWT
- File Uploads: Multer

---------------------------
Installation
---------------------------
1. Clone the repository:
   git clone https://github.com/your-repo/blog-app.git
   cd blog-app

2. Install dependencies:
   npm install

---------------------------
Configuration
---------------------------
Create a `.env` file with the following content:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=blog_app
JWT_SECRET=your_super_secret_jwt

---------------------------
Database Setup
---------------------------
1. Create MySQL database:
   CREATE DATABASE blog_app;

2. Run Sequelize migrations:
   npx sequelize-cli db:migrate

---------------------------
Run the App
---------------------------
npm start

Open browser: http://localhost:3000



---------------------------
Routes Summary
---------------------------
Route                       Method   Description
----------------------------------------------------------
/signup                    POST     Register user
/login                     POST     Login and get JWT
/dashboard                 GET      Dashboard (auth required)
/dashboard/create          POST     Add a new blog
/dashboard/edit/:id        GET      Render blog edit form
/dashboard/update/:id      POST     Update blog
/dashboard/delete/:id      POST     Delete blog


