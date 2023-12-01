/*-------------------START---------------------------*/
const function1 = function greeting(){
    console.log("Hello");
};
console.log(function1);/*This shows that the variable function1 contains the function.*/
console.log(typeof function1);
function1();/*This will run the code inside this function.*/
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
const function2 = function(){
    console.log("Hello2");
};
/*In js as long as there is a way to access a function we dont need function name.We can access this function using this variable. Now,this is called anonymous function means a function without a name.*/
function2();
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
function display(para){
    console.log(para);
}
display(66);
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
/*We can also pass a function into a function.*/
function run(para){
    para();/*Since para contains functions we can just call it.*/
}
run(function (){
    console.log("Hello3");
});
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
/*setTimeout():allows us to run a function in the future.It is a built-in function.*/
// setTimeout(function(){
    // console.log("timeout");
    // console.log("timeout2");/*All the code inside this function is synchronous code.*/
// },3000);/*setTimeout takes two parameters 1)The function we want to run in the future.2)How long to wait before running this function.1000 milliseconds is equal to 1 second.*/
// console.log("next line");/*It displays line 40 first and after 3seconds it displays line 38 because it doesnt actually wait for the 3 seconds to finish,it just set up the timer and immediately goes to next line so that is why line 40 is displayed first.This is called asynchronous code means it does not wait for the line to finish before going to the next line.While synchronous code will wait for one line to finish before going to next line.*/
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
/*setInterval():It also takes two vlaues like setTimeout,however you set timer it keeps running every time after the timer finishes.*/
// setInterval(function(){
//     console.log("Interval");
// },3000);
// console.log("next line2");
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
/*Another way to loop through an array:*/
[
    "make dinner",
    "wash dishes",
    "watch youtube"
].forEach(function (value,index){
    console.log(index);
    console.log(value);
});/*forEach() let us loop through this array.This is preffered way to loop through an array than for loop*/
/*-------------------FINISH--------------------------*/



