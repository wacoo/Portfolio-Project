const modalMenu = document.querySelector('.modal-1');
const btnHamburger = document.querySelector('.menu');
const btnClose = document.querySelector('.close-1');

const links = document.querySelectorAll('.lnks a');

function closeModal(link) {
  link.addEventListener('click', () => {
    modalMenu.close();
  });
}

links.forEach(closeModal);

btnHamburger.addEventListener('click', () => {
  modalMenu.show();
});

btnClose.addEventListener('click', () => {
  modalMenu.close();
});
