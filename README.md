⚙️ Tech Stack
Frontend: React 19

Backend: Node.js, Express, MongoDB

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites
Make sure you have the following installed on your machine:

Git

Node.js (includes npm)

Cloning the Repository
git clone https://github.com/R4366/Login_Signup.git
Backend Setup
1. Navigate to Backend folder
cd Backend
2. Install dependencies
npm install
3. Set up environment variables
Create a .env file in the backend root folder with the following content:
Add your MongoDB cluster url and jwt secret key
MONGO_URL=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret_key>
4. Run the backend server
npm run dev
Open http://localhost:3001 in your browser to view the backend.

Frontend Setup
1. Navigate to Frontend folder
cd ../Frontend
(Adjust the path if your frontend folder is named differently or located elsewhere)

2. Install dependencies
npm install
3. Run the frontend app
npm start
Open http://localhost:3000 in your browser to view the app.
