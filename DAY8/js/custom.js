/*---------start-----------*/
const product={
    name:"shirt",
    rating:{ 
        stars:4.5,
        count:87
    },
    fun:function function1(){
        console.log("function inside object.")
    }
};
console.log(product.rating.count);

product.fun();

console.log(JSON.stringify(product));/*stringify is a method of json object,so its a function that is saved inside JSON(object) and we can call this function using brackets().Between brackets we can give JS object we want to convert to JSON.Like here we changed product object into JSON.You will notice in console that the function that we saved in the object is not inside the JSON because JSON doesnot support function.One thing to note is that it actually results in string.see below*/
/*JSON.stringify() is used to convert js objects into strings.*/
console.log(typeof JSON.stringify(product));

const jsonString=JSON.stringify(product);
console.log(JSON.parse(jsonString));
/*JSON.parse() is used to convert json string back to js object.*/
/*---------finish--------*/

/*---------start-----------*/
/*Auto-boxing:It works with numbers,strings,booleans but not null and undefined*/
console.log("hello".length);
console.log("hello".toUpperCase());

/*---------finish--------*/

/*---------start-----------*/
const object1={
    message:"hello"
};
const object2 = object1;
object1.message = "good job!";
console.log(object1);
console.log(object2);

const object3 ={
    message:"Good job!",
};
console.log(object3===object1);
console.log(object2===object1);

const object4 ={
    message:"Good job!",
};
// const message =object4.message;
const {message}=object4;
console.log(message);

const object5={
    message,
    // method:function function1(){
    //     console.log("method");
    // }
    method(){
        console.log("method");
    }
};
console.log(object5);
object5.method();
/*---------finish--------*/


/*---------start-----------*/
/*---------finish--------*/

