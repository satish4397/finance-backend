Title => Finance Data Processing and Access Control Backend

This project implements a backend system for a Finance Dashboard that manages financial records and enforces role-based access control.

The system allows different users (Viewer, Analyst, Admin) to interact with financial data based on permissions. It supports:
User management
Role-based access control
Financial records management
Dashboard summary analytics
Input validation
Error handling
Data persistence using MySQL

The backend is built using:
Node.js
Express.js
MySQL
JWT Authentication
Sequelize ORM
Tech Stack

Backend:
Node.js
Express.js

Database:
MySQL

Authentication:
JSON Web Token (JWT)

Validation:
Joi

ORM:
Sequelize

Other:
dotenv
bcrypt
cors
morgan
Features

1. User and Role Management
The system supports:
Create users
Assign roles
Activate / deactivate users
Restrict actions based on roles

Roles:

Admin
Full access
Manage users
Manage financial records

Analyst
View records
Access dashboard summaries

Viewer
View dashboard data only

2. Financial Records Management

Each financial record contains:
id
amount
type (income / expense)
category
date
description
created_by

Operations supported:
Create record
Get records
Update record
Delete record
Filter records

Filters:
date range
category
type

3. Dashboard Summary APIs
The system provides aggregated financial data:
Total Income
Total Expenses
Net Balance
Category-wise totals
Recent transactions
Monthly trends

Example:
GET /api/dashboard/summary

Response:
{
  totalIncome: 50000,
  totalExpense: 30000,
  netBalance: 20000
}
4. Access Control Logic
Role-based access control is implemented using middleware.

Permissions:

Viewer:
View dashboard only

Analyst:
View records
View dashboard

Admin:
Create records
Update records
Delete records
Manage users

5. Validation and Error Handling
The system includes:
Input validation using Joi
Meaningful error messages
HTTP status codes
Safe database operations

Example:
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
6. Data Persistence

The system uses:
MySQL database

Sequelize ORM
Tables:
Users
Roles

FinancialRecords
Authentication Flow
User logs in
Server validates credentials
JWT token generated
Token used for API access

Authorization header:

Authorization: Bearer TOKEN

API Endpoints
Authentication
POST /api/auth/register
POST /api/auth/login

Users
GET /api/users
POST /api/users
PUT /api/users/:id
PATCH /api/users/:id/status

Financial Records
POST /api/records
GET /api/records
PUT /api/records/:id
DELETE /api/records/:id

Dashboard
GET /api/dashboard/summary
GET /api/dashboard/category-summary
GET /api/dashboard/recent-transactions
GET /api/dashboard/monthly-trends

Database Schema

Users Table
id INT PRIMARY KEY
name VARCHAR
email VARCHAR UNIQUE
password VARCHAR
role ENUM
status BOOLEAN
created_at
updated_at

Roles Table
id INT PRIMARY KEY
role_name VARCHAR

FinancialRecords Table
id INT PRIMARY KEY
amount DECIMAL
type ENUM
category VARCHAR
date DATE
description TEXT
created_by INT
created_at
updated_at

Security Features
Password hashing using bcrypt
JWT authentication
Role-based authorization
Input validation
Protected routes

Assumptions
Users must login before accessing APIs
Only Admin can manage users
Financial records belong to system users
Viewer role has read-only access