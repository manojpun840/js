/*---------start-----------*/
console.log(3<5);
/*---------finish--------*/

/*---------start-----------*/
console.log(3>5);
/*---------finish--------*/

/*---------start-----------*/
console.log(typeof "true");
console.log(typeof true);
/*---------finish--------*/

/*---------start-----------*/
/*Javascript has two ways to check if two values are equal.triple equal and double equal.
The difference is double equal tries to convert both values into same type. for example:*/
console.log(5=="5.00");/*Here double equal tried to convert into same type.Here 5 is number and 5.00 is string which is not equal*/
console.log(5==="5.00");/*Here it is not equal because 5 is number and 5.00 is string*/
/*---------finish--------*/

/*---------start-----------*/
console.log(3>5-5);
/*---------finish--------*/

/*---------start-----------*/
console.log(true && true);/*AND operator means both sides has to be true*/
console.log(true && false);
console.log(3>2 && 5>3);
console.log(3<2 && 5<3);
/*---------finish--------*/

/*---------start-----------*/
console.log(true || false);/*OR operator means at least one side has to true*/
console.log(false || false);
console.log(3>2 || 5>3)
console.log(3<2 || 5<3);
/*---------finish--------*/

/*---------start-----------*/
console.log(!true);/*NOT operator flips false to true and true to false*/ 
console.log(!false);
/*---------finish--------*/

/*---------start-----------*/
/*falsy values:There are only six falsy values:false, 0, "", Nan, undefined, null.Any value not on the list of falsy values are truthy values. */ 
const cartQuantity=5;
if (cartQuantity){
    console.log("The cart has products.");/*Because 5 is greater than 0 which is true.The number 0 and -0 are the only numbers that are false not the number greater than 0 and less than 0.*/
}
/*---------finish--------*/

/*---------start-----------*/
/*Nan:Not a number---we get Nan if we do invalid math*/
console.log("manoj"/5);
/*---------finish--------*/

/*---------start-----------*/
/*undefined:It represents something that doesn't have value.*/
let variable1;
console.log(variable1);/* undefined is only used with let not const.*/
/*---------finish--------*/

/*---------start-----------*/
/*null:we use null when we intentionally want something to be empty.In most cases though null and undefined works the same way.*/
/*---------finish--------*/

/*---------start-----------*/
/*Ternary operator:*/
console.log(true ? "truthy" : "falsy");/* The first value is the condition,if its truthy,the result of this code is a value after question mark.If the first value is falsey,the result of this code is value after the colon.So basically it is shortcut for if-else statement.Question mark as the if branch and colon as else branch.Now the advantage of ternary operator over if-statement is that we can save it in a variable.*/
/*---------finish--------*/

// /*---------start-----------*/
const result = 5>8 ? "truthy":"falsy";
console.log(result);

/*The same code using if-statement*/
let result_1;
if (5>8){
    result_1="truthy";
}
else{
    result_1="falsy";
}
console.log(result_1);
/*---------finish--------*/

/*---------start-----------*/
const message = false && "Hello";/*Here,we used guard operator.Means if the first value itself is a false then it doesnot have to check the second value*/
console.log(message);

const message_1=true && "Hello";
console.log(message_1);
/*---------finish--------*/

/*---------start-----------*/
const currency ="EUR" || "USD";
console.log(currency);
/*---------finish--------*/

/*---------start-----------*/
const currency_1=undefined || "USD";
console.log(currency_1);
/*---------finish--------*/