# 📌 Monolithic Task Board

![Node.js](https://img.shields.io/badge/Node.js-20.x-green) ![Express](https://img.shields.io/badge/Express-4.18-blue) ![SQLite](https://img.shields.io/badge/SQLite-3-lightgrey) ![Status](https://img.shields.io/badge/Status-Completed-success)

A simple yet powerful **Task Management System** built with **Monolithic Architecture**.
Developed for the **ENGSE207: Software Architecture** course (Week 3).

---

## ✨ Features
* **Kanban Board UI:** Organize tasks into To Do, In Progress, and Done.
* **CRUD Operations:** Create, Read, Update, and Delete tasks seamlessly.
* **Real-time Updates:** Status changes reflect immediately (local refresh).
* **Persistent Storage:** All data is saved safely in a SQLite database.

## 🛠️ Tech Stack
| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Vanilla JS & Modern CSS |
| **Backend** | ![Nodejs](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | Express.js Server |
| **Database** | ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white) | Lightweight Relational DB |

---

## 📂 Project Structure
```bash
week3-monolithic/
├── 📂 database/
│   ├── schema.sql       # Database creation script
│   └── tasks.db         # SQLite database file
├── 📂 public/
│   ├── index.html       # Main user interface
│   ├── style.css        # Modern UI styling
│   └── app.js           # Frontend logic (Fetch API)
├── server.js            # Main Express server
├── package.json         # Project dependencies
└── README.md            # Documentation
🚀 Getting StartedFollow these steps to run the project locally:1. Install DependenciesOpen your terminal and run:Bashnpm install
2. Setup DatabaseInitialize the SQLite database with the schema:Bashcd database
sqlite3 tasks.db < schema.sql
cd ..
3. Run ServerStart the application in development mode:Bashnpm run dev
4. UsageOpen your browser and visit:👉 http://localhost:3000📡 API EndpointsThe backend provides a RESTful API for managing tasks:MethodEndpointDescriptionGET/api/tasksGet all tasksPOST/api/tasksCreate a new taskPUT/api/tasks/:idUpdate task detailsPATCH/api/tasks/:id/statusUpdate task statusDELETE/api/tasks/:idDelete a task👨‍💻 AuthorBen Tester (Student ID)ENGSE207 Software Architecture - Week 3 Lab
---

### 🔥 สิ่งที่ต้องทำต่อ (เพื่อให้สมบูรณ์แบบ):
1.  **กด Save** ไฟล์ `README.md`
2.  **อัปเดตขึ้น GitHub** เหมือนเดิมครับ:
    ```bash
    git add README.md
    git commit -m "Docs: Update README to professional style"
    git push
    ```
