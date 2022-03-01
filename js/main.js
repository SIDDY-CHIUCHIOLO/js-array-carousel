const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

let jumbatronWrapper = "";

for ( let i = 0; i < items.length; i++){
    jumbatronWrapper += `<div class="my-jumbotron bg-danger float-start">
    <img class="w-100" src="${items[i]}" alt="img-random">
    </div>`
}

const caroselloWrapper = document.getElementById("my-contenitore-carosello");
caroselloWrapper.innerHTML += jumbatronWrapper;


const jumbotronElements = document.getElementsByClassName("my-jumbotron");
console.log(jumbotronElements);

jumbotronElements[0].classList.add("d-inline");




const bottoneNext = document.getElementById("bottone-avanti");
console.log(bottoneNext);
const bottoneBack = document.getElementById("bottone-indietro");
console.log(bottoneBack);


let activeItems = 0;

bottoneNext.addEventListener("click", function () {
    jumbotronElements[activeItems].classList.remove("d-inline");
    activeItems++;
    jumbotronElements[activeItems].classList.add("d-inline");  
})

bottoneBack.addEventListener("click", function () {
    jumbotronElements[activeItems].classList.remove("d-inline");
    activeItems--;
    jumbotronElements[activeItems].classList.add("d-inline");  
})