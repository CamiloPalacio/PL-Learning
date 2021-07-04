(function(){
    "use strict";
    var currentImage = 0;
    var myImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    var container = document.getElementById('content');
    var nextBtn = document.getElementById('next');
    var prevBtn = document.getElementById('previous');

    function swapImage(){
        var newSlide=document.createElement('img');
        newSlide.src = `slides/${myImages[currentImage]}`;
        newSlide.className = 'fadeinimg';
        container.appendChild(newSlide);

        if(container.children.length >2){
            container.removeChild(container.children[0]);
        }
    }

    nextBtn.addEventListener('click', function(event){
        event.preventDefault();

        currentImage++;
        if(currentImage > myImages.length - 1){currentImage = 0;}
        swapImage();
    });

    prevBtn.addEventListener('click', function(event){
        event.preventDefault();

        currentImage--;
        if(currentImage < 0){currentImage = myImages.length - 1;}
        swapImage();
    })
})();