document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        
        let span = document.createElement("span");
        span.textContent = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.innerHTML = "X";
        deleteBtn.onclick = function () {
            li.remove();
        };

        checkbox.addEventListener("change", function () {
            if (this.checked) {
                span.classList.add("completed");
                alert("🎉 Congratulations! Task Completed!");
            } else {
                span.classList.remove("completed");
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
}