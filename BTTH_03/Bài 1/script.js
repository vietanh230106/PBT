let students =
JSON.parse(localStorage.getItem("students")) || [];

let editIndex = -1;

const modal = document.getElementById("modal");
const form = document.getElementById("studentForm");

document.getElementById("addBtn")
.addEventListener("click", () => {

    form.reset();
    editIndex = -1;

    document.getElementById("formTitle")
    .innerText = "Thêm sinh viên";

    modal.style.display = "block";
});

document.getElementById("cancelBtn")
.addEventListener("click", () => {

    modal.style.display = "none";
});

function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}

function updateStatistics() {

    document.getElementById("total")
    .innerText = students.length;

    let avg = 0;

    if(students.length > 0){

        avg =
        students.reduce(
            (sum,s)=>sum+Number(s.score),
            0
        ) / students.length;
    }

    document.getElementById("avg")
    .innerText = avg.toFixed(2);
}

function renderStudents(){

    const table =
    document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach((student,index)=>{

        table.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.birthday}</td>
            <td>${student.classroom}</td>
            <td>${student.score}</td>
            <td>${student.email}</td>
            <td>
                <button onclick="editStudent(${index})">
                    Sửa
                </button>

                <button onclick="deleteStudent(${index})">
                    Xóa
                </button>
            </td>
        </tr>
        `;
    });

    updateStatistics();
}

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const student = {

        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        birthday: document.getElementById("birthday").value,
        classroom: document.getElementById("classroom").value,
        score: document.getElementById("score").value,
        email: document.getElementById("email").value
    };

    if(editIndex === -1){

        students.push(student);

    }else{

        students[editIndex] = student;
    }

    saveStudents();
    renderStudents();

    modal.style.display = "none";
    form.reset();
});

function editStudent(index){

    editIndex = index;

    let s = students[index];

    document.getElementById("id").value = s.id;
    document.getElementById("name").value = s.name;
    document.getElementById("birthday").value = s.birthday;
    document.getElementById("classroom").value = s.classroom;
    document.getElementById("score").value = s.score;
    document.getElementById("email").value = s.email;

    document.getElementById("formTitle")
    .innerText = "Cập nhật sinh viên";

    modal.style.display = "block";
}

function deleteStudent(index){

    if(confirm("Bạn có chắc muốn xóa?")){

        students.splice(index,1);

        saveStudents();
        renderStudents();
    }
}

renderStudents();