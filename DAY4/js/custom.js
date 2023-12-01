/*---------start-----------*/
let variable = 3;
console.log(variable);

variable = 5; /*This is called re-assigning variable.Note:while re-assigning we dont use let.Also we can re-assign variable as
many times as we want.*/ 
console.log(variable);

variable = variable + 4;/*here 4 is added to the previous variable not to original variable.*/ 
console.log(variable);
/*---------finish--------*/

/*---------start-----------*/
let variable1 = 2+2;
console.log(variable1);
/*---------finish--------*/

/*---------start-----------*/
let variable2 = 4+5;
console.log(variable2);
console.log(variable2 + 6);
/*---------finish--------*/

/*---------start-----------*/
let result = variable2 + 2;
console.log(result);
/*---------finish--------*/

/*---------start-----------*/
let message = "hello";
console.log(message);
/*---------finish--------*/

/*---------start-----------*/
const variable3 = 9;/* const varible is used when we dont want change in variables.*/ 
var variable4="hello"; /*However we dont use var much because it doesn't follow the rule of scope.*/ 

console.log(typeof variable3);
console.log(typeof variable4);
/*---------finish--------*/

