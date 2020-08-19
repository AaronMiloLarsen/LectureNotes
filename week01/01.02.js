// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

//Bronze
let myName = 'Aaron';
let partnerName = 'Sean';

console.log(myName.length);
console.log(partnerName.length);

//Silver

if (myName.length > partnerName.length) {
    console.log(`${myName} is longer than ${partnerName}`);
} 
else if (myName.length < partnerName.length) {
    console.log(`${partnerName} is longer than ${myName}`);
}  
else {
    console.log('The names are the same length');
}
//Gold
// let difference = Math.abs(myName.length - partnerName.length);
//     console.log(`The difference in names is: ${difference}`);   
    
if (myName.length > partnerName.length) {
    let letters = myName.length - partnerName.length;
    console.log(`My name is ${letters} characters longer than ${partnerName}!`);
    // console.log(`${partnerName} is shorter than mine by ${letters} letters`)
} else if (myName.length < partnerName.length) {
    let letters = partnerName.length - myName.length;
    console.log(`${partnerName}'s name is longer than mine by ${letters} letters`);
} else {
    console.log('Our names are the same length');
}


// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */

 let object = {
     name       :'Thing',
     digits     :5,
     isReal     :true,
     ball       : {
         size   :'Big',
         color  :'Red',
     }
     }

 console.log(typeof object.name);
 console.log(object.ball.color);

/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let mystery = {
    name      :'Thing',
    digits    :5,
    isReal    :true,
    ball      :{
        size  :'Big',
        color :'Red',
    }
}

let value = mystery.ball;

if (typeof value === 'string') {
    console.log('This value is a string!')
} else if (typeof value === 'number') {
    console.log('This value is a number!');
} else if (typeof value === 'boolean'){
    console.log('This value is a boolean!');
} else if (typeof value === 'object'){
    console.log('This value is an object!');
} else {
    console.log('What are you?!');
}