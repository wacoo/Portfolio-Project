"use strict";

var form1 = document.getElementById('frm');
var fname = form1.elements.fname;
var eMail = form1.elements.email;
var msg = form1.elements.message;
function storeData() {
  var formData = {
    fullName: fname.value,
    email: eMail.value,
    message: msg.value
  };
  var strData = JSON.stringify(formData);
  localStorage.setItem('formData', strData);
}
function retiveData() {
  var retrivedData = localStorage.getItem('formData');
  if (retiveData) {
    var formDataR = JSON.parse(retrivedData);
    fname.value = formDataR.fullName;
    eMail.value = formDataR.email;
    msg.value = formDataR.message;
  }
}
for (var i = 0; i < form1.elements.length; i += 1) {
  form1.elements[i].addEventListener('input', function () {
    storeData();
  });
}
window.addEventListener('load', function () {
  retiveData();
});