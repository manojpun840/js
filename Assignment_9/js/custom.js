/*---------start-----------*/
const todoList=[];/*We also call this empty array.*/
function addTodo(){
    const inputElement = document.querySelector(".js-name-input");
    const name = inputElement.value

    todoList.push(name);
    console.log(todoList);

    inputElement.value = "";/*This will make text box empty after typing.*/
}
/*---------finish--------*/



/*---------start-----------*/
/*---------finish--------*/
