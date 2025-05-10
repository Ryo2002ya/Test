document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('task-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete">削除</button>
    `;

    // タスクにクリックで完了状態を切り替える機能
    li.querySelector('.task-text').addEventListener('click', function() {
      li.classList.toggle('done');
    });

    // 削除ボタン
    li.querySelector('.delete').addEventListener('click', function() {
      taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = ''; // 入力欄をクリア
  }
}
