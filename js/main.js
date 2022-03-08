const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
'Svezia',
'Svizzera',
'Gran Bretagna',
'Germania',
'Paradise'
];

const text = [
'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
'Lorem ipsum',
'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];    

let jumbotron = "";
let thumbnails = "";

for ( let i = 0; i < items.length; i++){
    jumbotron += `
    <div class="my-jumbotron bg-danger float-start position-relative text-end text-white">
        <img class="w-100" src="${items[i]}" alt="img-random">
        <div class="position-absolute bottom-0 end-0 pe-3">
            <h1>${title[i]}</h1>
            <p>${text[i]}</p>
        </div>
    </div>`
    thumbnails+= `<div class="my-thumbnails float-end">
    <img src="${items[i]}"  alt="">
    </div>`
}

const jumbotronWrapper = document.getElementById("my-contenitore-carosello");
jumbotronWrapper.innerHTML += jumbotron;
const jumbotronElements = document.getElementsByClassName("my-jumbotron");
jumbotronElements[0].classList.add("d-inline");

const thumbnailsWrapper = document.getElementById("thumbnails-wrapper");
thumbnailsWrapper.innerHTML += thumbnails;
const thumbnailsElements = document.getElementsByClassName("my-thumbnails");
thumbnailsElements[0].classList.add("active");


const bottoneNext = document.getElementById("bottone-avanti");
const bottoneBack = document.getElementById("bottone-indietro");



let activeItems = 0;

bottoneNext.addEventListener("click", function () {
    jumbotronElements[activeItems].classList.remove("d-inline");
    thumbnailsElements[activeItems].classList.remove("active")

    if(activeItems === items.length - 1){
        activeItems = 0;
    } else {
        activeItems++;
    }

    jumbotronElements[activeItems].classList.add("d-inline"); 
    thumbnailsElements[activeItems].classList.add("active");  

})

bottoneBack.addEventListener("click", function () {
    jumbotronElements[activeItems].classList.remove("d-inline");
    thumbnailsElements[activeItems].classList.remove("active")

    if(activeItems === 0){
        activeItems = items.length - 1;
    } else {
        activeItems--;
    }

    jumbotronElements[activeItems].classList.add("d-inline"); 
    thumbnailsElements[activeItems].classList.add("active"); 
})