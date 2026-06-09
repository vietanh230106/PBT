let todos =
JSON.parse(localStorage.getItem("todos"))
|| [];

const list=document.getElementById("todoList");

function save(){
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function render(){

    list.innerHTML="";

    todos.forEach((todo,index)=>{

        const li=document.createElement("li");

        li.textContent=todo.text;

        if(todo.completed){
            li.classList.add("completed");
        }

        li.addEventListener("click",()=>{
            todo.completed=!todo.completed;
            save();
            render();
        });

        const btn=document.createElement("button");

        btn.textContent="❌";

        btn.onclick=()=>{
            todos.splice(index,1);
            save();
            render();
        };

        li.appendChild(btn);

        list.appendChild(li);

    });

    document.getElementById("count")
    .textContent=
    todos.filter(t=>!t.completed).length
    +" items left";
}

document.getElementById("todoForm")
.addEventListener("submit",e=>{

    e.preventDefault();

    const text=
    todoInput.value.trim();

    if(!text) return;

    todos.push({
        text,
        completed:false
    });

    save();
    render();

    todoInput.value="";
});

render();