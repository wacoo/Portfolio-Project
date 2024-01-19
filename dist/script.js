"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var modalMenu = document.querySelector('.modal-1');
  var modalPopUp = document.querySelector('.modal-2');
  var btnHamburger = document.querySelector('.menu');
  var btnClose = document.querySelector('.close-1');
  var btnClosePop = document.querySelector('.close-2');
  var links = document.querySelectorAll('.lnks a');
  function closeModal(link) {
    link.addEventListener('click', function () {
      modalMenu.close();
    });
  }
  for (var i = 1; i <= 9; i += 1) {
    var btnLinks = document.getElementById("a-".concat(i));
    btnLinks.addEventListener('click', function (event) {
      event.preventDefault();
      modalPopUp.classList.add('blurred');
      modalPopUp.showModal();
    });
  }
  links.forEach(closeModal);
  btnHamburger.addEventListener('click', function () {
    modalMenu.show();
  });
  btnClose.addEventListener('click', function () {
    modalMenu.close();
  });
  btnClosePop.addEventListener('click', function () {
    modalPopUp.close();
  });
});