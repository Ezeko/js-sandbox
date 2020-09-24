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