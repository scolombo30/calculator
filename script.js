let buttons= document.querySelectorAll('.button');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log(button.id);
    }
    )
})