"use strict";
// improtant thing to note about ts
// 1. we have to compile the ts file to js to use the js and for compiling we have to run this command `tsc file.ts index.js` when the ts file and the output file of the ts that is the js file has different names or `tsc file.ts` when both the ts and js files have same names.
// now if you want that whenever you save the ts file it compile it then you can run this cmd `tsc file.ts --w` this will start a local server which will the work for you.
// if you want to keep the js file which will conatin the compiled ts to another folder than in which the ts file is then you have to follow the following steps:-
//1. in cmd line run this cmd `tsc --init` in the folder which contains the ts file. this will create a project management json file(tsconfig.json) for you.
//2. in that file look for rootDir (commented line by default) uncomment it then add the folder location like `"rootDir":"./folderName"` folder name of the folder containing the ts file that is the input file then change the value of `"outDir":"./folderName"` folder name of the folder containing the js file or the output file. Note :- the tsconfig.json file must be in the root directory of the project.
// Now after doing this you can just simply run this cmd to the compile the things `tsc` or `tsc --w` if you want to compile on every save of the ts file.
// Also one more thing you should inclued is => "include":["folder Name"] before the last closed curly braces. By doing this you are saying that you while compile you should only looking the folder that i have provided and no where else. 
console.log(`hello from the ts file`);
// const inputs = document.querySelectorAll('input');
const name1 = 'nitish';
console.log(name1);
// how to define the type of parameter we can pass to the function => when a define the type of parameter then it will not accept any other type of parameter than the defined one.
let circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(10));
// Typescript with arrays => suppose we have some string elements in an array then the array will accept only string types and not any other type like a boolean, number or object etc that we will not be able to push or replace any other type of data in that array.
// its important to note that only those types of data will be pushed and changed to that are declared while defining that array. see example below
const arr = ['hello', 10];
arr.push(15);
arr.push("nitish");
// arr.push(true) => will produce an error
// arr.push({xyz:"abc"}) => this will also produce an error;
// also one more thing to mention is since arr is mentioned as array it will not be reassigned to any other data type like arr = "a string" or arr = 10.
// objects in ts
let obj = {
    name: "nitish",
    rollno: 2230061,
    passed: true
};
// the keys in the objects are like the other variables i.e., whatever is defined as a string will only hold a string and no other type of data like obj.name = 15 will produce an error. Also we cannot add other properties to the object which is already defined like obj.branch = something will produce an error because branch property was not declared while the declaration of the object.
// Also suppose we are redeclaring or changing the object the we have to define all the properties the obj contained while the declaratin otherwise it will produce error. like obj = {name:"new name",passed:false} this will produce an error because you have missed a property that is the rollno.
obj = {
    name: "new name",
    passed: true,
    rollno: 13
};
// Explicitely defining the type of vaiables
let age; // age will only hold a number 
let passed; // passed will only hold true or false
let stdName; // stdName will only hold a string
let students;
// stidents array will only hold object type elements. now here is an important thing to note that we have defined the type of element this object will hold but we haven't declared the array so we will not be able to use the push method here so while declaring this you should declare like this ==> let students : object[] = [] insted of what we have declared above.
let studentDetails = [];
// defining the mixed array types
let mixed = []; // this array can take string, numbers and booleans
// mixed type variables
let mixedVar;
// declaring object types
let obj1;
// this is one way of declaring the type of a variable as object but this is not good because it can also hold an array since array is a type of object. To fix that a variable should contain an object only you can use the following way:-
let obj2;
// now since we have defined the blueprint of obj2, so we can neither have less than the 4 properties(name, rollno, branch, passed) that we have declared nor it should be more than that, i.e., it should be exactly as per the objects blueprint we have defined above. 
// Any type of variable
let newVar = true;
console.log(newVar);
newVar = "nitish";
console.log(newVar);
// it is important to note that you should use "any" type when you don't know what type of data this var is going to hold if you use this var senselesly then this will be like using js.
// funtion type in ts
let greet;
greet = () => {
    console.log(`good morning`);
};
greet();
const add = (a, b, c) => {
    // here the question mark after c is used for creating an optional parameter. in ts functions you can not send more or less parameter then specified that why the "optional" is necessary.
    console.log(a + b);
};
add(2, 3);
//setting default values in function
const add2 = (a, b, c = 10) => {
    // here the question mark after c is used for creating an optional parameter. in ts functions you can not send more or less parameter then specified that why the "optional" is necessary.
    console.log(a + b);
};
add2(2, 3);
// Default values cannot be optional because they are optional by default i.e., if we dont pass any third arg it will take the default value that we have mentioned.
const multipleAddition = (...a) => {
    if (a) {
        let total = 0;
        for (let i = 0; i < a.length; i++) {
            total += a[i];
        }
        return total;
    }
};
console.log(multipleAddition(1, 2, 3, 4, 5, 8, 96, 21));
// note a rest parameter cannot be optional because it allows us pass zero or any number of parameter and since we can pass zero param therefore it can be regarded as already optional.
// note :- any variable which can hold more than one type of data is know as a union type.
// suppose we are keeping the value that is being returned by a function in varialbe then that vaiable will of the same type as that of the returned value. that is if the variable is holding a number type return value then it will never hold or assigned anyother type after that. see the example below:-
const subt = (a, b) => {
    return a - b;
};
// as you can see above we have defined a type after the parenthesis that type is the type of value this is being returned. It is not necessary though, but if you have a bigger function then it will be easier to know that this function is going to return this type of varialbe without reading and understanding the whole function. now since in the above function we have mentioned that it will return a number the we cannot return any other type like => return "a-b"; (string type). Now there are many function that return nothing like the add funcion above in that kind of function the return type is "void" you can check the return type of a function by hovering on the parenthesis part. In these kind of question it will be good to mention the type as void like "():void" of making the code easy to understand.
// Type aliases:- 😞 => 😎(dry code)
// used to define a name for union types which are being used multiple times to reduce the size of a line of code. see example below:-
let greetAgain = (user) => {
    console.log(`The user id of ${user.name} is ${user.uid}`);
};
greetAgain = (user) => {
    console.log(`The user id of ${user.name} is ${user.uid}`);
};
greetAgain = (user) => {
    console.log(`The user id of ${user.name} is ${user.uid}`);
};
// function signatures
// used to make the skelaton of funcion it is like forcing to the function to follow the signature or hold same type of function as the signature.
let greetOnceMore; // this line of code says greetOnceMore will only hold those function which is taking two parameter and both are strings also the reture type of this function will be void.
greetOnceMore = (Name, greeting) => {
    console.log(`${Name} is saying ${greeting}`);
    return 12;
};
console.log(greetOnceMore("nitish", "hi"));
// There is an issue will the function signature, when the return type of signature is void then we can return any type but its not the case with other types.
