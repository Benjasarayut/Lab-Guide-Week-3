# Week 3 – Task Board Application (Monolithic Architecture)

ENGSE207 Software Architecture – Week 3 Lab  
Simple Task Board (Kanban-style) application using **Monolithic Architecture**

---

## 📌 Project Overview

This project is a simple **Task Board Application** that allows users to:

- View tasks in a Kanban board
- Create new tasks
- Move tasks between statuses (TODO → IN_PROGRESS → DONE)
- Delete tasks
- Filter tasks by status

The system is built using **Monolithic Architecture**, where frontend, backend, and database logic are handled within a single application.

---

## 📁 Project Structure

week3-monolithic/
├── server.js
├── package.json
├── database/
│ └── schema.sql
├── public/
│ ├── index.html
│ ├── style.css
│ └── app.js
├── .gitignore
└── README.md

yaml
คัดลอกโค้ด

---

## 🚀 Quick Start

### 1️⃣ Install Dependencies
```bash
npm install
2️⃣ Create Database
bash
คัดลอกโค้ด
cd database
sqlite3 tasks.db < schema.sql
cd ..
3️⃣ Run Application
bash
คัดลอกโค้ด
npm run dev
4️⃣ Open Browser
arduino
คัดลอกโค้ด
http://localhost:3000
📦 Dependencies
Package	Version
express	^4.18.2
sqlite3	^5.1.6
nodemon	^3.0.1 (dev)

🔧 Available Scripts
bash
คัดลอกโค้ด
npm start      # Run server with Node.js
npm run dev    # Run server with Nodemon (auto-restart)
📝 Environment Requirements
Node.js 20+

npm 10+

SQLite 3+

🗄️ Database
Database: SQLite

Location: /database/tasks.db

Schema file: /database/schema.sql

📖 Lab Guide
For detailed instructions and explanations, refer to:

Week3_Lab_Guide_Complete.md

Week3_Lab_Quick_Reference.md

✉️ Support
Course Discord

Email: thanit@example.com

Office Hours: Tue / Thu 14:00 – 16:00
