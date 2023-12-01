/*---------start-----------*/
function function1(){
    console.log("Hello");
}
function1();
function1();/*We can use this code as many times we want*/
/*---------finish--------*/

/*---------start-----------*/
function clickMe(){
    return 5;/*return will get the value out of the function.
    We can also return calculation(2+2),variable,or anything that results in value.
    When we use return statement,it ends the function immediately.Means after this if you type anything it wont display.*/
}
/*---------finish--------*/

/*---------start-----------*/
function addButton(){
    variable=addButton();
}
/*---------finish--------*/

/*---------start-----------*/
/*Parameters:It is sort of the opposite of the return statement.return statement get value out of function while parameters puts a value into a function.*/
/*---------finish--------*/

/*---------start-----------*/
function calculateTax(parameter1){
    console.log(parameter1*0.1);
}
calculateTax(2000);
calculateTax(5000);
/*---------finish--------*/

/*---------start-----------*/
function calculateT(cost,taxPercent){
    console.log(cost*taxPercent);
}
calculateT(4000,0.1);
calculateT(5000);
/*---------finish--------*/

/*---------start-----------*/
function calculateT(cost,taxPercent=0.1){
    console.log(cost*taxPercent);
}
calculateT(8000);
calculateT(5000);
/*---------finish--------*/

/*---------start-----------*/
/*---------finish--------*/