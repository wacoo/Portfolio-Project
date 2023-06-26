const modal_menu = document.querySelector('.modal-1');
const btn_hamburger = document.querySelector('.menu');
const btn_close = document.querySelector('.close-1');

btn_hamburger.addEventListener('click', () => {
    modal_menu.show();
});

btn_close.addEventListener('click', () => {
    modal_menu.close();
});

