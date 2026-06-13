let tasks =
JSON.parse(localStorage.getItem("tasks"))
|| [];

let editIndex = -1;

const modal =
document.getElementById("modal");

const form =
document.getElementById("taskForm");

document
.getElementById("addBtn")
.addEventListener("click",()=>{

    form.reset();

    editIndex = -1;

    document
    .getElementById("formTitle")
    .innerText = "Thêm công việc";

    modal.style.display="block";
});

document
.getElementById("cancelBtn")
.addEventListener("click",()=>{

    modal.style.display="none";
});

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function updateStatistics(){

    const total =
    tasks.length;

    const completed =
    tasks.filter(
        t=>t.completed
    ).length;

    document
    .getElementById("total")
    .innerText = total;

    document
    .getElementById("completed")
    .innerText = completed;

    document
    .getElementById("pending")
    .innerText =
    total - completed;
}

function renderTasks(){

    const taskList =
    document.getElementById("taskList");

    taskList.innerHTML = "";

    if(tasks.length===0){

        taskList.innerHTML =
        "<p>Chưa có công việc nào</p>";

        updateStatistics();
        return;
    }

    tasks.forEach((task,index)=>{

        taskList.innerHTML += `
        <div class="card
        ${task.completed ?
        "completed" : ""}">

            <h3>${task.title}</h3>

            <p>${task.description}</p>

            <p>
            Hạn:
            ${task.deadline}
            </p>

            <p>
            Ưu tiên:
            ${task.priority}
            </p>

            <p>
            Trạng thái:
            ${task.completed ?
            "Hoàn thành"
            :
            "Chưa hoàn thành"}
            </p>

            <button
            onclick="toggleStatus(${index})">

            ${task.completed ?
            "Bỏ hoàn thành"
            :
            "Hoàn thành"}

            </button>

            <button
            onclick="editTask(${index})">

            Sửa

            </button>

            <button
            onclick="deleteTask(${index})">

            Xóa

            </button>

        </div>
        `;
    });

    updateStatistics();
}

form.addEventListener(
"submit",
function(e){

    e.preventDefault();

    const task = {

        title:
        document.getElementById("title")
        .value,

        description:
        document.getElementById("description")
        .value,

        deadline:
        document.getElementById("deadline")
        .value,

        priority:
        document.getElementById("priority")
        .value,

        completed:false
    };

    if(editIndex === -1){

        tasks.push(task);

    }else{

        task.completed =
        tasks[editIndex].completed;

        tasks[editIndex] = task;
    }

    saveTasks();

    renderTasks();

    modal.style.display="none";

    form.reset();
});

function editTask(index){

    editIndex = index;

    let task =
    tasks[index];

    document
    .getElementById("title")
    .value = task.title;

    document
    .getElementById("description")
    .value = task.description;

    document
    .getElementById("deadline")
    .value = task.deadline;

    document
    .getElementById("priority")
    .value = task.priority;

    document
    .getElementById("formTitle")
    .innerText =
    "Cập nhật công việc";

    modal.style.display="block";
}

function deleteTask(index){

    if(confirm(
    "Bạn có chắc muốn xóa?")){

        tasks.splice(index,1);

        saveTasks();

        renderTasks();
    }
}

function toggleStatus(index){

    tasks[index].completed =
    !tasks[index].completed;

    saveTasks();

    renderTasks();
}

renderTasks();