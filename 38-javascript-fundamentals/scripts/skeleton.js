'use script';


// Numbers
var num = 5;
var decimal = 3.6;


// Strings

var name = "Daniel";
var other = 'April';


// Booleans (True and False)

var wantToGo = true;
var dontLeaveMe = false;


// undefined
var isThisAThing = undefined;
var happy;
happy = true; //later down the line I can declare it

// null
var isAnythingHere = null;


// Arrays

var things = ['string', 5, true]
console.log(things[1]);
things.push('new thing');
console.log(things)

// Object Literals / hash in ruby = object in javascript
var person = {
'name': "Joe",
'age': 35,
'attributes' // more to this
};

console.log(person)
person.['name'];
person['name'] = 'Sarah';
consol.log(person);

person['attributes']['cool']
person.attributes.cool

// For Loop
// most popular loop - ruby most popular is .each
//I want to loop thru 1 to 100.
for (var index = 1; index <= 100; index++) {
//where to start / where to stop/ and what to do
  console.log(index);
}

for (var i = 20; i >= 12; i -= 2)
console.log(i)

var clothes = ['shirt', 'shorts', 'hats'];
console.log(clothes.length);

var(var i = 0; i < clothes.length; i ++) {
var clothing = clothing[i];
console.log(i);
console.log(clothing);

}

// While Loop
// while (true) {
//   console.log('still running');
//   break;
// }


// Do/While Loop



// If Statement
// condition has to be true or false

if (false){
  console.log('it was true');

} else if (true){
  console.log('in else if')

}
  else {
    console.log('logging else now')
  }


// Named function
function doStuff(){
  console.log('in doStuff');
}

doStuff();


// Functions with parameters
function greet(name) {
  if (name === undefined){
console.log("hello, okease submit name");
} else {
  console.log("Hello, " + name);
}
}
greet('Jeremy');
greet('Louise');
greet();



// Anonymous function
var myFunctionVariable = function(){
  console.log("logging out inside annonymous function");
}
myFunctionVariable();
console.log(myFunctionVariable);

// Scope examples -------------------
var x = 5; //global anything here is available in print
console.log(x);

function print(){
  var insideVar = 'test' //not available outside of print

  console.log(x);

function.other() {
  console.log(x)
}
}

print()



function add(num1, num2) {
  if (num2 === undefined) {
    return num1;
  }
  return num1 + num2;

}
var num = add(4,7);
console.log(num);


// Callbacks --------------------------
// call back is a function calling another function
function makeBurger(instructionsToAddPatty, instructionsToAddToppings){
  console.log('--------');
  instructionsToAddPatty();
  console.log('--------');
}
function addPatty(){
  console.log('//////////')
}

function addHugePatty(){
  console.log('???????????')
}

function addLettuce(){
  console.log('OOOOOO');
}

function addBLT(){
  console.log('- - -');
  addLettuce();
  console.log('_______');
}

makeBurger(addPatty, addLettuce);
makeBurger(addHugePatty, addBLT);



// forEach callback




// objects - accessing attributes




// objects with functions - basic example




// objects with functions - basic Mars Rover implementation



// More complicated callbacks --------------------------




// asynchronous JS
