window.addEventListener('DOMContentLoaded', () => {
  const modalMenu = document.querySelector('.modal-1');
  const modalPopUp = document.querySelector('.modal-2');
  const btnHamburger = document.querySelector('.menu');
  const btnClose = document.querySelector('.close-1');
  const btnClosePop = document.querySelector('.close-2');
  const links = document.querySelectorAll('.lnks a');

  function closeModal(link) {
    link.addEventListener('click', () => {
      modalMenu.close();
    });
  }

  for (let i = 1; i <= 9; i += 1) {
    const btnLinks = document.getElementById(`a-${i}`);
    btnLinks.addEventListener('click', (event) => {
      event.preventDefault();
      modalPopUp.classList.add('blurred');
      modalPopUp.showModal();
    });
  }

  links.forEach(closeModal);

  btnHamburger.addEventListener('click', () => {
    modalMenu.show();
  });

  btnClose.addEventListener('click', () => {
    modalMenu.close();
  });

  btnClosePop.addEventListener('click', () => {
    modalPopUp.close();
  });
});
