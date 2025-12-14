const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Connect to Database
const db = new sqlite3.Database('./database/tasks.db', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// --- API Endpoints ---

// 1. GET /api/tasks
app.get('/api/tasks', (req, res) => {
    const sql = "SELECT * FROM tasks ORDER BY created_at DESC";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "success", "data": rows });
    });
});

// 2. POST /api/tasks
app.post('/api/tasks', (req, res) => {
    const { title, description, status, priority } = req.body;
    const sql = 'INSERT INTO tasks (title, description, status, priority) VALUES (?,?,?,?)';
    const params = [title, description, status || 'TODO', priority || 'MEDIUM'];
    
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": { id: this.lastID, ...req.body },
            "id": this.lastID
        });
    });
});

// 3. PUT /api/tasks/:id
app.put('/api/tasks/:id', (req, res) => {
    const { title, description, status, priority } = req.body;
    const sql = `UPDATE tasks SET 
                 title = ?, description = ?, status = ?, priority = ?, updated_at = CURRENT_TIMESTAMP 
                 WHERE id = ?`;
    const params = [title, description, status, priority, req.params.id];

    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "success", "changes": this.changes });
    });
});

// 4. DELETE /api/tasks/:id
app.delete('/api/tasks/:id', (req, res) => {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    db.run(sql, req.params.id, function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "deleted", changes: this.changes });
    });
});

// 5. PATCH /api/tasks/:id/status
app.patch('/api/tasks/:id/status', (req, res) => {
    const { status } = req.body;
    const sql = 'UPDATE tasks SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
    db.run(sql, [status, req.params.id], function (err) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({ "message": "success", "changes": this.changes });
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});