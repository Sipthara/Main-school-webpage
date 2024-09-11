//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function ( ) {
    body.classList.toggle('open');
});

//Sroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin:'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin:'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin:'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin:'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

document.body.addEventListener("click", (ev) =>{
    const isExpandableTitle = !!ev.target.closest(".expandable-title-bar");
    const expandable = ev.target.closest(".expandable");

    if (!isExpandableTitle){
        return;
    }

    expandable.classList.toggle("expandable-open")
})