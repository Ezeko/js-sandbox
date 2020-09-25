/*for (var i = 1; i < 10; i++) {
    document.getElementById('h1').innerHTML = 'This is written with js'
} */
var mde = 'Ezekiel';
(function(name){
    var greeting = `Hi My name is ${name}`;
    return console.log(greeting);
}(mde))

function person (name, age, eyeColor){
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
}

let person01 = new person('Abiola', 65, 'black');
console.log(typeof(person01))
//console.log(testFunction(name));

//Dom create elements test

let newElement = document.createElement('a');
let newTextNode = document.createTextNode('This is a new link created with dom');
//append text to element

newElement.append(newTextNode)

let h1 = document.querySelector('#h1');

//append tag to html

h1.append(newElement);
//add href

newElement.setAttribute('href', 'www.google.com')