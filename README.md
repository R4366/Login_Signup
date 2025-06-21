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
bash
Copy
Edit
git clone https://github.com/R4366/Login_Signup.git
Backend Setup
1. Navigate to Backend folder
bash
Copy
Edit
cd Backend
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up environment variables
Create a .env file in the backend root folder with the following content:

ini
Copy
Edit
MONGO_URL=<your_mongo_connection_string>
JWT_SECRET=<your_jwt_secret_key>
4. Run the backend server
bash
Copy
Edit
npm run dev
Open http://localhost:3001 in your browser to view the backend.

Frontend Setup
1. Navigate to Frontend folder
bash
Copy
Edit
cd ../Frontend
(Adjust the path if your frontend folder is named differently or located elsewhere)

2. Install dependencies
bash
Copy
Edit
npm install
3. Run the frontend app
bash
Copy
Edit
npm start
Open http://localhost:3000 in your browser to view the app.
