"use strict";

var form = document.getElementById('frm');
var error = document.querySelector('.error');
var email = form.elements.email;
function isLowerCaseStr(str) {
  return str === String(str).toLowerCase();
}
function validateEmail() {
  return isLowerCaseStr(email.value);
}
form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateEmail()) {
    form.submit();
  } else {
    error.innerHTML = 'Only lower case characters are allowed in the email field!';
  }
});