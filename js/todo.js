const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; 

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const div =document.createElement("div");
    const li = document.createElement("li");
    div.id = newTodo.id;
    div.classList.add("todo-list__li");
    //li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    //const button = document.createElement("button");
    const button = document.createElement("i");
    button.classList.add("fa-solid");
    button.classList.add("fa-circle-xmark");
    button.classList.add("fa-sm");
    //button.innerText = "❌";
    div.appendChild(li);
    div.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(div);
    button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
    event.preventDefault(event);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    paintToDo(newTodoObj);
    toDos.push(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo); 
} 