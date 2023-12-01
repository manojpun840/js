const todoList=[{
    name:"make dinner",
    dueDate:"2023-12-22"
},{
    name:"wash dishes",
    dueDate:"2023-12-22",
}];

renderTodoList();

function renderTodoList(){ /*The word render means to display something on the page.*/

    let todoListHTML = "";

    for (i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;/*This and*/
        // const {dueDate} = todoObject;
        const {name, dueDate} = todoObject;/*This is same*//*This is shortcut for line 17 and 18.*/
        const html = 
            `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick = "
                todoList.splice(${i},1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>
            `;
        todoListHTML += html;
    }

    document.querySelector(".js-todo-list").innerHTML = todoListHTML;

}

function addTodo(){
    const inputElement = document.querySelector(".js-name-input");
    const name = inputElement.value

    const dateInputElement = document.querySelector(".js-due-date-input");
    const dueDate = dateInputElement.value;

    todoList.push({
        // name:name,
        // dueDate:dueDate
        name,
        dueDate /*Line 46 and 47 are shortcut for line 44 and 45*/
    });

    inputElement.value = "";

    renderTodoList();
}