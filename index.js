//J'ai essayé de faciliter le code le plus possible
//On peut pour faire rapide et simple utiliser le toggle 


let ouvrir = document.querySelector('.bi-list');
let liste = document.querySelector('.menu');
let fermer = document.querySelector('.bi-x-lg');
ouvrir.addEventListener('click', function() {
    liste.style.visibility = 'visible';
    ouvrir.style.visibility = 'hidden';
    fermer.style.visibility = 'visible'

    fermer.addEventListener('click', function() {
        liste.style.visibility = 'hidden';
        ouvrir.style.visibility = 'visible';
        fermer.style.visibility = 'hidden';

    })
});