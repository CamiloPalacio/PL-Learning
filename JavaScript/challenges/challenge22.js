(function(){
    "use strict";
    const text = document.querySelector('p');
    const myButton = document.querySelector('button');

    myButton.addEventListener('click', function(){
        text.style.color = "green";
    });

}())