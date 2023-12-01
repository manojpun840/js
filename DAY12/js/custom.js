/*-------------------START---------------------------*/
const regularFunction = function (param,param2) {
    console.log("Hello");
    return 5;
};
regularFunction();

const arrowFunction = (param,param2) => {/*arrow function works the same way as regular function.The difference is that function we use arrow in arrow function.Parameters also works the same way.Finally,return statements also works the same way*/
    console.log("hello");
    return 5;
};
arrowFunction();
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
/*The difference is arrow function has some shortcuts than regular function.*/
const oneParam = param => { /*So here arrow function has only one parameter then these round brackets are optional.We can remove them.*/
    console.log(param + 1);
};
oneParam(3);
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
const oneLine = () => 2+3;/*So here arrow function has only one line of code than we can actually put it on the same as the arrow.And curly brackets are optional.*/
console.log(oneLine());
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
/*We can use arrow function inside object.*/
const object2 = {
    method:() => {
        /*This is not recommended to use when saving a function in an object.*/
    },
    method () {
        /*This is called shorthand method syntax.It is recommended to use when saving a function in an object.*/
    }
};
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
const buttonElement = document.querySelector(".js-button");  

const eventListener = () => {
    console.log("click");
}; /*addEventListener() lets us run some code when we interact with the element.It has two parameters.1)event-The way to find these event names is to look at onclick attribute on html.click after on is event.2)A function we want to run when we click this element.*/
buttonElement.addEventListener("click",() => {
    console.log("click2");
});
buttonElement.removeEventListener("click",eventListener);/*It also takes to parameters.1)event 2)A function we want to remove. */
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
/*-------------------FINISH--------------------------*/

