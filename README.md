# Student Management System - Backend

This is the backend of the **Student Management System** built using **Node.js**, **Express**, and **MongoDB**.

## 🌐 Live Link

- [https://student-management-system-backend-liaf.onrender.com](https://student-management-system-backend-liaf.onrender.com)

## 🛠️ Features

- Add, edit, delete student records
- Track statistics of enrolled students
- RESTful API structure
- Connected to MongoDB Atlas
- CORS enabled for frontend communication

## 📁 Folder Structure

Method | Endpoint | Description
GET | /api/students | Fetch all students
POST | /api/students | Add a new student
PUT | /api/students/:id | Update a student
DELETE | /api/students/:id | Delete a student
GET | /api/stats | Get stats (department-wise/year-wise)
