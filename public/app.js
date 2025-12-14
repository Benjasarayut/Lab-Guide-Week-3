const API_URL = '/api/tasks';

// 1. โหลดข้อมูลเมื่อเปิดเว็บ
document.addEventListener('DOMContentLoaded', fetchTasks);

async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        renderBoard(result.data);
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

// 2. แสดงผลบนกระดาน
function renderBoard(tasks) {
    // เคลียร์กระดานเก่า
    document.getElementById('list-todo').innerHTML = '';
    document.getElementById('list-inprogress').innerHTML = '';
    document.getElementById('list-done').innerHTML = '';

    tasks.forEach(task => {
        const card = document.createElement('div');
        card.className = `task-card priority-${task.priority}`;
        card.innerHTML = `
            <span class="task-title">${task.title}</span>
            <div class="task-desc">${task.description || ''}</div>
            <div class="task-actions">
                <button class="btn-sm btn-delete" onclick="deleteTask(${task.id})">Delete</button>
                ${getNextStatusButton(task)}
            </div>
        `;

        // ใส่การ์ดลงในช่องที่ถูกต้องตาม status
        if (task.status === 'TODO') {
            document.getElementById('list-todo').appendChild(card);
        } else if (task.status === 'IN_PROGRESS') {
            document.getElementById('list-inprogress').appendChild(card);
        } else if (task.status === 'DONE') {
            document.getElementById('list-done').appendChild(card);
        }
    });
}

// ปุ่มสำหรับย้ายสถานะ (Logic: Todo -> In Progress -> Done)
function getNextStatusButton(task) {
    if (task.status === 'TODO') {
        return `<button class="btn-sm btn-move" onclick="updateStatus(${task.id}, 'IN_PROGRESS')">Start ➡️</button>`;
    } else if (task.status === 'IN_PROGRESS') {
        return `<button class="btn-sm btn-move" onclick="updateStatus(${task.id}, 'DONE')">Complete ✅</button>`;
    } else {
        return `<span style="color:green; font-size:12px;">Completed</span>`;
    }
}

// 3. สร้าง Task ใหม่
async function createTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;

    if (!title) return alert('Please enter a title');

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, priority, status: 'TODO' })
    });

    // เคลียร์ช่องและโหลดใหม่
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    fetchTasks();
}

// 4. ลบ Task
async function deleteTask(id) {
    if(!confirm('Are you sure?')) return;
    
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTasks();
}

// 5. อัปเดตสถานะ (ย้ายช่อง)
async function updateStatus(id, newStatus) {
    await fetch(`${API_URL}/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
    });
    fetchTasks();
}