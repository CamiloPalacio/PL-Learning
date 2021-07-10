(function(){
    "use strict";
    const detailsForm = document.querySelector('#destinationForm');

    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(evt){
        evt.preventDefault();

        const destName = evt.target.elements['name'].value;
        const destLocation = evt.target.elements['location'].value;
        const destPhoto = evt.target.elements['photo'].value;
        const destDesc = evt.target.elements['description'].value;

        for (let i=0; i<detailsForm.length; i++){
            detailsForm.elements[i].value = "";
        }

        const destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

        const wishListContainer = document.getElementById('destinationContainer');

        if(wishListContainer.children.length === 0){
            document.getElementById('title').innerHTML = "My Wish List";
        }

        document.querySelector('#destinationContainer').appendChild(destCard);

    }

    function createDestinationCard(name, location, photoURL, description){
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.setAttribute('alt', name);

        const constPhotoUrl = "images/signpost.jpg"

        if(photoURL){
            img.setAttribute('src', photoURL);
        }else{
            img.setAttribute('src', constPhotoUrl);
        }

        const cardBody = document.createElement('div');
        cardBody.className = "card-body";

        const cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        const cardSubtitle = document.createElement('h4');
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

        if(description.length !==0){
            const cardText = document.createElement('p');
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText); 
        }
        
        const cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerText = "Remove"

        cardDeleteBtn.addEventListener("click", removeDestination);
        cardBody.appendChild(cardDeleteBtn);
        card.appendChild(img);
        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(evt){
        const card = evt.target.parentElement.parentElement;
        card.remove();
    }
})()