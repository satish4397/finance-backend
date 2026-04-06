# Finance Backend — Simple Documentation

## Project Overview

This project is a backend system for managing financial records with role-based access control. It demonstrates API design, authentication, authorization, validation, and database operations using Node.js and MySQL.

The system allows different users (Admin, Analyst, Viewer) to interact with financial data based on their permissions.

---

## Technology Stack

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* JWT Authentication
* Joi Validation
* bcrypt

---

## Features

### User Management

* Register user
* Login user
* Assign roles
* Activate / deactivate users
* Role-based access control

Roles:

* ADMIN — Full access
* ANALYST — View records and dashboard
* VIEWER — View dashboard only

---

### Financial Records

Each record contains:

* amount
* type (income or expense)
* category
* date
* description

Operations:

* Create record
* Get records
* Update record
* Delete record
* Filter records
* Pagination support

---

### Dashboard APIs

* Total income
* Total expenses
* Net balance
* Category totals
* Recent transactions
* Monthly trends

---

## Project Structure

finance-backend/

src/

* config/
* controllers/
* middleware/
* models/
* routes/
* services/
* utils/
* validations/

server.js

package.json

README.md

---

## Installation

### 1. Install dependencies

npm install

### 2. Configure environment variables

Create .env file:

PORT=5000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=finance_db

JWT_SECRET=your_secret_key

### 3. Run server

npm run dev

Server runs on:

[http://localhost:5000](http://localhost:5000)

---

## Default Admin User

Email:

[admin@gmail.com]

Password:

123456

Role:

ADMIN

---

## API Base URL

[http://localhost:5000/api](http://localhost:5000/api)

---

## Authentication APIs

Register:

POST /api/auth/register

Login:

POST /api/auth/login

---

## User APIs

Get Users:

GET /api/users

Update Role:

PATCH /api/users/:id/role

Deactivate User:

PATCH /api/users/:id/status

---

## Record APIs

Create Record:

POST /api/records

Get Records:

GET /api/records

Update Record:

PUT /api/records/:id

Delete Record:

DELETE /api/records/:id

---

## Dashboard APIs

GET /api/dashboard/summary

GET /api/dashboard/category

GET /api/dashboard/recent

GET /api/dashboard/monthly

---

## Security

* Password hashing
* JWT authentication
* Role-based authorization
* Input validation
* Error handling

