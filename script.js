let buttons= document.querySelectorAll('.button');
let num1, num2, operator;

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        updateDisplay(returnNumberOrSymbol(button.id));
    }
    )
})

function updateDisplay(number){
    let display = document.querySelector('.display');
    if (number === 'C'){
        display.textContent = '';
        num1=undefined;
        num2=undefined;
        operator=undefined;
        return;
    }
    if (number === 'DEL'){
        display.textContent = display.textContent.slice(0, -1);
        return;
    }
    if (display.textContent.includes('+')||display.textContent.includes('-')||display.textContent.includes('*')||display.textContent.includes('/')){
        display.textContent = '';
    }
    if((typeof(number)=== 'number')||(number==='.'&& !display.textContent.includes('.'))){
        display.textContent += number;
        operator===undefined? num1 = display.textContent : num2 = display.textContent;
    }
    
    if (number === '+'|| number === '-'|| number === '*'|| number === '/'){
        operator === undefined||operator==='' ? operator = number : doCalculation(display);
        operator = number;
        display.textContent = number;
    }
    if (number === '='){
        if ((operator !== undefined||operator!=='') && (num2!==0)){
            doCalculation(display);
        }
        else {
            display.textContent = num1;
        }
    }
    }

function doCalculation(display){
    let result;
    switch (operator) {
        case '+': result = (parseFloat(num1) + parseFloat(num2)).toFixed(2);
            break;
        case '-': result = (parseFloat(num1) - parseFloat(num2)).toFixed(2);
            break;
        case '*': result = (parseFloat(num1) * parseFloat(num2)).toFixed(2);
            break;
        case '/': result = (parseFloat(num1) / parseFloat(num2)).toFixed(2);
            break;
        case '': result = parseFloat(num1).toFixed(2);
    }
    Number.isInteger(parseFloat(result))? display.textContent = parseInt(result) : display.textContent = result;
    num1 = parseFloat(display.textContent);
    num2 = 0;
    operator = '';
    result = 0;
    console.log(num1+ ' nuovo num1');
}    

function returnNumberOrSymbol(id){
    switch (id) {
        case 'zero': return 0;            
            break;
        case 'one': return 1;
            break;
        case 'two': return 2;
            break;
        case 'three': return 3;
            break;
        case 'four': return 4;
            break;
        case 'five': return 5;
            break;
        case 'six': return 6;
            break;
        case 'seven': return 7; 
            break;
        case 'eight': return 8;
            break;
        case 'nine': return 9;
            break;
        case 'sum': return '+';
            break;
        case 'subtract': return '-';
            break;
        case 'multiply': return '*';   
            break;
        case 'divide': return '/';   
            break;
        case 'dot': return '.';
            break;
        case 'equal': return '=';
            break;
        case 'reset': return 'C';
            break;
        case 'canc': return 'DEL';
    }
}