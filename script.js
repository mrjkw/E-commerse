const bar = document.getElementById('bar');
const hide = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(hide){
    hide.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}