function addTask() {
    let task = document.getElementById("taskInput").value;
    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    // Create Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}