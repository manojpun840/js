/*------------------Start---------------------*/
// document.body.innerHTML="Hello"; /*innerHTML property controls all the HTML inside the body.*/
// document.title = "Good Job!"
/*-------------------Finish------------------*/

/*------------------Start---------------------*/
// console.log(document.title);

// console.log(document.body);
// console.log(typeof document.body);

// console.log(document.body.innerHTML);
// document.body.innerHTML="Changed";/*So this will replace all of the html inside the body with text changed.This shows innerHTML gives us the control of all the HTML inside the body.Another feature is we can replace this html with new html code not just text.*/
// document.body.innerHTML="<button>Good Job</button>";
/*-------------------Finish------------------*/

/*------------------Start---------------------*/
/*document.querySelector():Lets us get any element from the page and put it inside javascript.*/
console.log(document.querySelector("button"));
document.querySelector("button").innerHTML="changed";/*If we have two buttons on the html page then it will get only the first button.So to access the second button we can access it by giving class.*/
console.log(document.querySelector(".js-button"));/*Also a common practise is to start the class with js- to make clear that this class is being used in js.*/
const buttonElement =document.querySelector(".js-button");/*We can also save it in variable.*/
console.log(buttonElement);
/*-------------------Finish------------------*/

/*------------------Start---------------------*/
/*-------------------Finish------------------*/



