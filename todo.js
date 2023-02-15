 const todoForm = document.querySelector("form");
 const todoInput = document.querySelector("input");
 const todoLists = document.querySelector("#lists");
 const massageElement = document.querySelector("#massage");

 const showMassage = (text, status) => {
   massageElement.textContent = text;
   massageElement.classList.add(`bg-${status}`);

   setTimeout(() => {
     massageElement.textContent = "";
     massageElement.classList.remove(`bg-${status}`);
   }, 1000);
};

//creat todo
const createTodo = (todoId,todovalue) =>{
    const todoElement = document.createElement("li");
    todoElement.id = todoId;
    todoElement.classList.add("list-style");

    todoElement.innerHTML = `<span> ${todovalue} </span>
    <span><button class="btn" id="deleteButton">
    <i class="fa fa-trash"> </i></button></span>`;
    todoLists.appendChild(todoElement);

    const deleteButton = todoElement.querySelector("#deleteButton");
    deleteButton.addEventListener("click",deleteTodo);
}

//delete todo
const deleteTodo = (event) =>{
    const selectedTodo = event.target.parentElement.parentElement.parentElement;
    todoLists.removeChild(selectedTodo);
    showMassage("todo deleted","danger");

    let todos = getTodoFromlocalStroage();
    todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
    localStorage.setItem("mytodos", JSON.stringify(todos));
}

//get todo from localStorage
const getTodoFromlocalStroage = () =>{
    return localStorage.getItem("mytodos")? JSON.
    parse(localStorage.getItem("mytodos")) : [];
}

//add todo
const todoFunction = (event) =>{
    event.preventDefault();
    const todoValue = todoInput.value;

    //unique id
    const todoId = Date.now().toString();
    createTodo(todoId,todoValue);
    showMassage("todo added","success");

    const todos = getTodoFromlocalStroage(); 
    todos.push({todoId,todoValue});
    localStorage.setItem("mytodos", JSON.stringify(todos));
    todoInput.value = "";
    
}

