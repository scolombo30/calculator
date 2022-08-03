let buttons= document.querySelectorAll('.button');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(returnNumberOrSymbol(button.id));
        updateDisplay(returnNumberOrSymbol(button.id));
    }
    )
})

function updateDisplay(number){
    let display = document.querySelector('.display');
    (typeof(number)=== 'number')||(number==='.'&& !display.textContent.includes('.'))? 
    display.textContent += number : null;
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