"use strict";
// const a = document.querySelector("a");
// console.log(a.href) => if you do this then ts will warn you that a.href can be null. There are two ways to remove this error first by using if statement and the second is using an exclamation sign as shown below. This exclamation sign says that i am sure that i will definetely get a value and not null.
const btn = document.querySelector("button");
console.log(btn.textContent); // now this is perfectly fine because of the "!" sign.
const form = document.querySelector("form"); // now we have selected a form from the document but we don't know which form it is so form selecting a particular form we can select it using class selector or selection. now if you hover over the form it will show you HTMLFormElement.
const particularForm = document.querySelector(".form1"); // now if you hover over the variable holding this form then it will show that this is holding an "Element" which can be any thing with this class but it will be form is not certain here 
