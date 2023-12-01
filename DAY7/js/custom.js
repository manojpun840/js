/*---------start-----------*/
const product = {
    name:"socks", /*Here name and price are property and socks and 2000 are values.*/
    price:2000
}
console.log(product);
console.log(product.name);/*One way of accessing values inside objects.This way of accessing is called dot notation.*/
console.log(product.price);

product.name="cotton socks";
console.log(product);

product.newProperty = true;
console.log(product);

product.newProperty = "Manoj";
console.log(product);

delete product.newProperty;
console.log(product);

console.log(typeof product);
/*---------finish--------*/

/*---------start-----------*/
const product2={
    name:"shirt",
};
console.log(product2["name"]);/*This is another way of accessing values inside objects.This way of accessing is called bracket notation.*/
// console.log(product2.delivery-time);Note this line./*We use bracket notation where dot notation doesnot work.For instance,here js this - is minus sign and is tryind to do math.So look below.*/
console.log(product2["delivery-time"]);/*Since delivery-time does not exists on the object we get undefined.*/
/*---------finish--------*/

/*---------start-----------*/
const product3={
    name:"manoj",
    // ["delivery-time"]:"1 Day" The code still works without bracket.
    "delivery-time":"1 Day",
};
console.log(product3["delivery-time"]);
/*---------finish--------*/

/*---------start-----------*/
const product4={
    name:"shirt",
    rating:{ /*This is called nested object.An object inside an object.*/ 
        stars:4.5,
        count:87
    },
    fun:function function1(){
        console.log("function inside object.")/*So when we create a function inside an object we call it method.Since in js function are values we can also save it in object.*/
    }
};
console.log(product4.rating.count);

product4.fun();/*So this will access value associated with the fun property,which is a function.We can call it using brackets.*/
/*---------finish--------*/

/*---------start-----------*/
/*Note console.log,math.random is also a method*/
console.log(typeof console);
console.log(typeof console.log);/*here console is object and log is function.So log is a function saved inside console object*/
/*---------finish--------*/

/*---------start-----------*/
/*---------finish--------*/