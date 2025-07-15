# Role-Based Blog App 📝

A mini blog application built with HTML, CSS, and JavaScript that allows users to register, log in, and perform role-based actions (Author or Admin). This project demonstrates core front-end concepts like DOM manipulation, localStorage usage, user authentication, and CRUD operations — all without a backend.

---

## 🔑 Features

### 👥 Login & Registration System
- Register with `username`, `password`, and a `role` (admin or author)
- Unique usernames enforced
- Login and logout functionality
- Logged-in user is stored in `localStorage`
- Redirects to role-specific dashboard

### ✍️ Blog Post Management (Author Role)
- Create blog posts (title, content, image URL)
- Posts stored in `localStorage`
- Posts are rendered instantly in the DOM
- Author is auto-filled from the logged-in user
- Authors can **edit** and **delete** their own posts

### 🔒 Admin Dashboard
- View a list of all registered users with their roles
- Admin cannot create or manage blog posts

---

## 📦 Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)
- DOM Manipulation
- `localStorage` for persistent data storage
- UUID / Date.now() for unique IDs
- Method chaining (e.g. `.filter().map()`)

---

## 🚀 How to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/role-based-blog-app.git
