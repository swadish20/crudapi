# CRUD API with Node.js, Express & PostgreSQL

A RESTful CRUD API built using **Node.js**, **Express.js**, and **PostgreSQL**. This project demonstrates how to perform Create, Read, Update, and Delete operations on user data using a PostgreSQL database.

## 🚀 Features

- Create a new user
- Get all users
- Get a user by ID
- Update user details
- Delete a user
- PostgreSQL database integration
- Environment variable configuration using dotenv
- Docker support
- Clean MVC project structure

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg (Node PostgreSQL Client)
- Docker
- dotenv
- Nodemon

## 📁 Project Structure

```
src/
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── models/
│   ├── createUserTable.js
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── data/
│   └── data.sql
└── index.js

.env
package.json
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/swadish20/crudapi.git
cd crudapi
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory.

```env
PORT=5001
USER=postgres
HOST=localhost
DATABASE=postgres
DBPORT=5432
PASSWORD=your_password
```

### 4. Start PostgreSQL

Make sure PostgreSQL is running locally or using Docker.

### 5. Run the application

```bash
npm run dev
```

Server will start at:

```
http://localhost:5001
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user` | Create a new user |
| GET | `/api/user` | Get all users |
| GET | `/api/user/:id` | Get user by ID |
| PUT | `/api/user/:id` | Update a user |
| DELETE | `/api/user/:id` | Delete a user |

---

## 🗄️ User Schema

| Field | Type |
|-------|------|
| id | SERIAL (Primary Key) |
| name | VARCHAR(100) |
| email | VARCHAR(100) UNIQUE |
| created_at | TIMESTAMP |

---

## 📬 Sample Request

### Create User

**POST** `/api/user`

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Response

```json
{
  "status": 201,
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

---

## ▶️ Future Improvements

- Request validation
- JWT Authentication
- Swagger API Documentation
- Unit & Integration Testing
- Pagination & Filtering
- Logging

---

## 👨‍💻 Author

**Swadish O**

- GitHub: https://github.com/swadish20
- LinkedIn: https://www.linkedin.com/in/swadish-o/

---

## 📄 License

This project is licensed under the MIT License.
