Backend Application for User Management and Booking System
This backend application is developed using Node.js, Express, Mongoose, MongoDB, JWT, and Bcrypt. It supports user registration, login, and role-based authentication with two distinct roles: user and admin.

Features
User Authentication and Authorization
User Registration: Users can register with their email and password.
User Login: Registered users can log in and receive a JWT token for authenticated access to protected routes.
JWT Authentication: Ensures secure access to routes and resources by verifying JWT tokens.
Role-Based Access Control
User Role:
Can create a booking if the requested time slot is available.
Can view their individual bookings.
Admin Role:
Can create, update, delete, and retrieve all facilities.
Can view all bookings but cannot delete or update any bookings.
Facility Management
Create Facility: Admins can create new facilities.
Update Facility: Admins can update existing facilities.
Delete Facility: Admins can delete facilities.
Get All Facilities: Admins can retrieve a list of all facilities.
Booking Management
Create Booking: Authenticated users can create a booking, specifying the facility and the time slot. Bookings include facility ID and user ID for reference.
View Single Booking: Users can view details of a specific booking.
View All Bookings: Admins can view all bookings, filtered by date if needed.
API Endpoints
Authentication
POST /api/v1/auth/register: Register a new user.
POST /api/v1/auth/login: Login and obtain a JWT token.
Facility
POST /api/v1/facilitys: Create a new facility (Admin only).
PUT /api/v1/facilitys/:id: Update an existing facility (Admin only).
DELETE /api/v1/facilitys/:id: Delete a facility (Admin only).
GET /api/v1/facilitys: Get a list of all facilities (Admin only).
Booking
POST /api/v1/bookings: Create a new booking (Authenticated user only).
GET /api/v1/bookings/:id: Get details of a specific booking (Authenticated user only).
GET /api/v1/bookings: Get a list of all bookings (Admin only).
Setup and Running the Application
Install dependencies: npm install
Configure environment variables in a .env file.
Start the server: npm start
