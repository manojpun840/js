/*---------start-----------*/
const myArray= [10,20,30];/*So this is an array and it represents a list of three numbers 10,20 and 30*/ 
console.log(myArray);
console.log(myArray[0]);/*Here the number inside[] are called index which the position on the array that we want to get.Indexing starts from 0.*/
console.log(myArray[4]);
console.log(myArray[2]);

myArray[0]=699;/*Changing the value of array.*/
console.log(myArray);

console.log(myArray.length)/*This will tell us how many values are in the array.*/
/*---------finish--------*/

/*---------start-----------*/
/*We can write arrays in multiple lines as well.*/
const newArray=[
    100,
    200,
    300
];
console.log(newArray);
/*---------finish--------*/

/*---------start-----------*/
/*Inside an array we can put any type of value.Also we can put an array inside an array.*/
[1,"hello",true,{name:"socks"},[1,2]];
console.log(typeof [1,2]);/*This will tell us an array is an object that is because an array is actually an object but it is special type of object.*/
/*---------finish--------*/

/*---------start-----------*/
/*If we want to check if something is specially an array we can use this code.*/
console.log(Array.isArray([1,2]));/*It will display true because arrays are just a type of object.*/
/*---------finish--------*/

/*---------start-----------*/
/*Now we learn a useful method of an array called .push() .push() adds a value to the end of the array.*/
myArray.push(100);
console.log(myArray);

myArray.splice(0,1)/*.splice() removes a value from an array.It takes two numbers:1)The index we want to remove 2)Number of values we want to remove.*/
console.log(myArray);
/*---------finish--------*/

/*---------start-----------*/
/*Loops*/
let i = 1;
while(i<=5){
    console.log(i);
    i+=1;
}
/*---------finish--------*/

/*---------start-----------*/
for (let i=1;i<=5;i++){
    console.log(i);
}
/*---------finish--------*/

/*---------start-----------*/
/*Which loop should we use:If we are a doing standard loop for example,if we have a loop variable,condition,and an increment it is recommended to use for loop.If its non-standard loop then use while loop.So whats an example of non-standard loop.See below.*/

let randomNumber = 0;
while(randomNumber<0.5){
    randomNumber=Math.random();
}
console.log(randomNumber); /*Note in this code there is no loop variable and it also doesnot have increment step.*/
/*---------finish--------*/

/*---------start-----------*/
const todoList = [
    "make dinner",
    "wash dishes",
    "watch youtube",
];
for(let i = 0; i <= todoList.length - 1; i++){
    const value = todoList[i];
    console.log(value);
}
/*---------finish--------*/

/*---------start-----------*/
/*Lets say we have array of numbers.How do we calculate total of this numbers?See solution below.*/
const nums = [1,1,3];
let total = 0;
for (let i = 0; i < nums.length; i++)　{
    const num = nums[i];
    total += num;    
}
console.log(total);
/*now we gonna create double of the given array.*/
const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDoubled.push(num*2);
}
console.log(numsDoubled);
/*---------finish--------*/

/*---------start-----------*/
const array1 = [1,2,3];
const array2 = array1;
array2.push(4);
console.log(array1);
console.log(array2);
/*---------finish--------*/

/*---------start-----------*/
/*We can avoid this behaviour by like this:*/
const array3 = [1,2,3];
const array4 = array3.slice();
array3.push(4);
console.log(array3);
console.log(array4);
// /*---------finish--------*/

/*---------start-----------*/
const [firstValue,secondValue] = [1,2,3];
console.log(firstValue);
/*---------finish--------*/

/*---------start-----------*/
for (let i = 0; i<=10; i++) {
    console.log(i);/*Prints 0 to 10*/
}
/*---------finish--------*/

/*---------start-----------*/
for (let i = 0; i<=10; i++) {
    console.log(i);
    if (i === 8){
        break;
    }
}
/*---------finish--------*/

/*---------start-----------*/
for (let i = 0; i<=10; i++) {
    if(i===3){
        continue;/*This will skip 3*/
    }
    console.log(i);
    if (i === 8){
        break;
    }
}
/*---------finish--------*/
console.log("finish")
/*---------start-----------*/
let j = 1;
while(j<=10){
    if(j % 3 === 0){
        j++;
        continue;
    }
    console.log(j);
    j++;
}
/*---------finish--------*/


/*---------start-----------*/
/*Loops with functions */
function doubleArray(numss){
    const numsDoubledd = [];
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        numsDoubled.push(num*2);
    }
    console.log(numsDoubled);
}
doubleArray([1,1,3]);
doubleArray([4,2,5]);
/*---------finish--------*/

console.log("FINISH");

/*---------start-----------*/

/*---------finish--------*/

/*---------start-----------*/
/*---------finish--------*/

/*---------start-----------*/
/*---------finish--------*/

