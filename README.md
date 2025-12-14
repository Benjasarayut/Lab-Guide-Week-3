# 📌 Week 3 Starter Code - Task Board Monolithic

![Node](https://img.shields.io/badge/Node.js-20%2B-green?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18.2-blue?style=flat-square&logo=express)
![SQLite](https://img.shields.io/badge/SQLite-3%2B-003B57?style=flat-square&logo=sqlite)
![Status](https://img.shields.io/badge/Status-Starter_Code-orange?style=flat-square)

Welcome to the starter code for the **Monolithic Task Board** application. This project is designed for the **ENGSE207: Software Architecture** course.

---

## 📂 Project Structure

```bash
week3-monolithic/
├── server.js            # Entry point
├── package.json         # Dependencies config
├── database/
│   └── schema.sql       # Database setup script
├── public/              # Static files (Frontend)
│   ├── index.html
│   ├── style.css
│   └── app.js
├── .gitignore
└── README.md
🚀 Quick StartFollow these steps to get the application running locally:1. Install DependenciesBashnpm install
2. Create DatabaseInitialize the SQLite database using the provided schema:Bashcd database
sqlite3 tasks.db < schema.sql
cd ..
3. Run ApplicationStart the server in development mode (with auto-restart):Bashnpm run dev
4. Open BrowserVisit the following URL to view the app:👉 http://localhost:3000📦 Dependencies & EnvironmentSystem RequirementsComponentVersion RequiredNode.jsv20+npmv10+SQLitev3+Key PackagesPackageVersionTypeexpress^4.18.2Productionsqlite3^5.1.6Productionnodemon^3.0.1Development🔧 Available ScriptsYou can run these commands in your terminal:CommandDescriptionnpm startRun server with standard Node.jsnpm run devRun server with Nodemon (Auto-restart on save)📖 Lab ResourcesFor detailed instructions, please refer to:📄 Week3_Lab_Guide_Complete.md📄 Week3_Lab_Quick_Reference.md✉️ Support & ContactIf you encounter issues, please use the following channels:Course Discord: (Check syllabus for link)Email: thanit@example.comOffice Hours: Tue/Thu 14:00 - 16:00ENGSE207 Software Architecture - Week 3
---

### อย่าลืมอัปเดตขึ้น GitHub นะครับ
หลังจากแก้เสร็จแล้ว พิมพ์คำสั่งตามนี้เพื่อส่งหน้าสวยๆ นี้ขึ้นเว็บครับ:

```bash
git add README.md
git commit -m "Docs: Refine README layout and formatting"
git push
