function addTask() {
    let task = document.getElementById("taskInput").value;
    if (task === "") return; // prevent empty task
    let li = document.createElement("li");
    li.innerText = task;

    // Add delete on click
    li.onclick = function() {
        this.remove();
    };

    document.getElementById("taskList").appendChild(li);
}