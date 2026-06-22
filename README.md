# Task-2-Srihitha
# Backend API Development

## Project Overview

This project is a simple Backend API developed using Node.js and Express.js as part of the DecodeLabs Industrial Training Kit – Project 2.

The API demonstrates fundamental backend development concepts including:

* REST API creation
* GET and POST endpoints
* JSON request and response handling
* Input validation
* HTTP status codes
* Server-side application logic

---

## Technologies Used

* Node.js
* Express.js
* CORS
* Nodemon

---

## Project Structure

```text
backend-api-project/
│
├── data/
│   └── users.js
│
├── routes/
│   └── userRoutes.js
│
├── server.js
├── package.json
├── .gitignore
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/srihithaf5/Task-2-Srihitha.git
```

Move into the project folder:

```bash
cd Task-2-Srihitha
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

or

```bash
npm start
```

Server will run on:

```text
http://localhost:5000
```

---

## API Endpoints

### Home Route

**GET /**

Response:

```json
{
  "message": "Backend API Running Successfully"
}
```

---

### Get All Users

**GET /api/users**

Response:

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@gmail.com"
    }
  ]
}
```

---

### Get User By ID

**GET /api/users/:id**

Example:

```text
GET /api/users/1
```

Response:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@gmail.com"
  }
}
```

---

### Create User

**POST /api/users**

Request Body:

```json
{
  "name": "Srihitha",
  "email": "srihitha@gmail.com"
}
```

Response:

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 2,
    "name": "Srihitha",
    "email": "srihitha@gmail.com"
  }
}
```

---

## Validation

The API validates:

* Name is required
* Email is required
* Email format is valid

Example Invalid Request:

```json
{
  "name": "",
  "email": ""
}
```

Response:

```json
{
  "success": false,
  "message": "Name and Email are required"
}
```

---

## Features

* RESTful API Design
* GET Endpoints
* POST Endpoints
* JSON Data Handling
* Input Validation
* Error Handling
* HTTP Status Codes

---
<img width="1871" height="952" alt="image" src="https://github.com/user-attachments/assets/c24d01d4-71f3-4e7f-ba38-9e7c2ad39bc7" />

