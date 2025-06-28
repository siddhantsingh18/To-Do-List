document.addEventListener("DOMContentLoaded", () => {
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const darkToggle = document.getElementById("darkModeToggle");

  // ✅ Auto-focus on input (useful for mobile)
  taskInput.focus();

  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = taskText;

    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.className = "deleteBtn";

    delBtn.addEventListener("click", () => {
      li.remove();
    });

    li.addEventListener("click", (e) => {
      if (e.target !== delBtn) {
        li.classList.toggle("completed");
      }
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus(); // Re-focus after adding
  };

  addTaskBtn.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  darkToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });
});
