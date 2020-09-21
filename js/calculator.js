function calculate (){
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const operator = document.getElementById('operator').value;

    event.preventDefault();
    switch (operator) {
        case'add': 
        var calc = eval(parseFloat(value1) + parseFloat(value2));
        document.getElementById('result').innerHTML = (value1 + " " + '+' + " " + value2 + " = " + calc);
        break;

        case'sub': 
        var calc = eval(parseFloat(value1) - parseFloat(value2));
        document.getElementById('result').innerHTML = (value1 + " " + '-' + " " + value2 + " = " + calc);
        break;

        case'div': 
        var calc = eval(parseFloat(value1) / parseFloat(value2));
        document.getElementById('result').innerHTML = (value1 + " " + '÷' + " " + value2 + " = " + calc);
        break;

        case'mul': 
        var calc = eval(parseFloat(value1) * parseFloat(value2));
        document.getElementById('result').innerHTML = (value1 + " " + 'x' + " " + value2 + " = " + calc);
        break;
    }
    
}