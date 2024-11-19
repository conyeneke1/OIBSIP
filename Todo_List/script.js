const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskDesc = document.getElementById("task-desc");
const pendingTasks = document.getElementById("pending-tasks");
const completedTasks = document.getElementById("completed-tasks");


taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});


function addTask() {
  const title = taskTitle.value.trim();
  const desc = taskDesc.value.trim();
  const addedOn = new Date().toLocaleString();

  if (!title || !desc) return;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${title}</td>
    <td>${desc}</td>
    <td>${addedOn}</td>
    <td>
      <div class="action-buttons">
        <button class="action-btn complete-btn" onclick="completeTask(this)">✔️</button>
        <button class="action-btn edit-btn" onclick="editTask(this)">✍️</button>
        <button class="action-btn delete-btn" onclick="deleteTask(this)">❌</button>
      </div>
    </td>
  `;
  pendingTasks.appendChild(newRow);
  taskForm.reset();
}

// Complete Task
function completeTask(button) {
  const row = button.closest("tr");
  const title = row.children[0].textContent;
  const desc = row.children[1].textContent;
  const completedOn = new Date().toLocaleString();

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${title}</td>
    <td>${desc}</td>
    <td>${completedOn}</td>
    <td>
      <div class="action-buttons">
        <button class="action-btn delete-btn" onclick="deleteTask(this)">❌</button>
      </div>
    </td>
  `;

  completedTasks.appendChild(newRow);
  row.remove();
}

// Edit Task
function editTask(button) {
  const row = button.closest("tr");
  taskTitle.value = row.children[0].textContent;
  taskDesc.value = row.children[1].textContent;
  row.remove();
}

// Delete Task
function deleteTask(button) {
  button.closest("tr").remove();
}
