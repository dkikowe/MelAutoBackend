Melauto
Melauto is a web application designed for managing and displaying automotive products. The project consists of three main parts:
•	Main (User Interface) – The frontend application with a homepage displaying products.
•	Admin Panel – The backend dashboard for administrators to manage products.
•	Backend – The server-side application that handles authentication, data management, and API requests.
Features
Main (User Interface)
•	Homepage displaying products.
•	Responsive design for different screen sizes.
Admin Panel
•	Secure login with username and password.
•	Ability to add, edit, and delete products.
•	Data table for managing product listings.
Backend
•	REST API for managing products.
•	Authentication for admin access.
•	Database integration with MongoDB.
•	Image storage using Amazon S3 Bucket.
Technologies Used
Frontend
•	React.js
•	React Router
•	Axios
•	React Slider
Backend
•	Node.js
•	Express.js
•	MongoDB (Mongoose)
•	JWT authentication
•	Nodemailer for email notifications
•	Amazon S3 for image storage
Installation
Prerequisites
Ensure you have the following installed on your system:
•	Node.js
•	MongoDB
Setup
1. Clone the Repository
git clone https://github.com/dkikowe/melAutoMainю.git
git clone https://github.com/dkikowe/MelAutoAdmin.git
git clone https://github.com/dkikowe/MelAutoBackend.git
cd melauto
2. Install Dependencies
Frontend 
cd frontend
npm install
Backend
cd backend
npm install
3. Environment Variables
Create a .env file in the backend directory and configure the following:

MONGO_SRV=mongodb+srv://didar:didar123456@cluster0.x5lq7.mongodb.net/cars
ACCESS_TOKEN_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZnVsbG5hbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczOTgyMTAxOSwiZXhwIjoxNzM5ODIxNjE5fQ.Wc1P2nb5tfAdUqJUuHPtzk1f24pYY_hqBL4jrygZCGw
REFRESH_TOKEN_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZnVsbG5hbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczOTgxOTk4OCwiZXhwIjoxNzQwNjgzOTg4fQ.b6IWAQUIoXpkHIhxxGNVx20Fjj7TFbe-5tsgAkemjys
PORT=4040
4. Run the Application
Start Backend Server
cd backend
npm start
Start Frontend (Main & Admin Panel)
cd frontend
npm start
Usage
•	The main application will be available at http://localhost:5050
•	The admin panel can be accessed at http://localhost:3000/admin
•	The backend API will run on http://localhost:4040

