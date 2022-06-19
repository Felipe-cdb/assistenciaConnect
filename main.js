window.addEventListener('scroll', onScroll);

onScroll();
// ajustar as funções onScroll, show, fazer uma nova com as funcionalidades do onScroll e colocar essa nova e show dentro de onScroll
function onScroll() {
    console.log(scrollY);
    navBarScroll();
    backToTopButtonShow();
}

function navBarScroll() {
    if(scrollY > 0){
        navegation.classList.add('scroll')
    } else {
        navegation.classList.remove('scroll')
    }
}

function backToTopButtonShow() {
    if(scrollY > 650){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}

var parametros = {
    origin: 'bottom',
    distance: '30px',
    duration: 500,    
}

//adicionar os novos elementos abaixo
ScrollReveal().reveal(`
    #home, 
    #home button, 
    #home img, 
    home .timeTable, 
    #services,
    #services header,
    #services .card,
    #about,
    #about img,
    #contact,
    #contact .content,
    #contact img,
    footer,
    footer .bandeiras
`);
