/*-------------------START---------------------------*/
/*Question:return positive number from given array.*/
console.log([1,-3,5].filter((value,index) => {
    /*
    if(value => 0) {
        return true;
    }
    else {
        return false;
    }
    */
    return value >= 0;/*This does the same as above commented.Return positive numbers.*/
}));/*filter works the same way as .foreach()*/
/*-------------------FINISH--------------------------*/
/*.map 1)creates a new array.2)whatever we return => added to new array.*/
console.log([1,1,3].map((value,index) => {
    return 10;
}));

console.log([1,1,3].map((value,index) => {
    return value + 10;
}));

console.log([1,1,3].map((value,index) => {
    return value * 2;
}));

console.log([1,1,3].map(value => value * 2));/*This is shortcut for line 24-26*/
/*-------------------START---------------------------*/

/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
/*-------------------FINISH--------------------------*/

/*-------------------START---------------------------*/
/*-------------------FINISH--------------------------*/