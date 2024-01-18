const form1 = document.getElementById('frm');
const { fname } = form1.elements;
const eMail = form1.elements.email;
const msg = form1.elements.message;

function storeData() {
  const formData = {
    fullName: fname.value,
    email: eMail.value,
    message: msg.value,
  };

  const strData = JSON.stringify(formData);
  localStorage.setItem('formData', strData);
}

function retiveData() {
  const retrivedData = localStorage.getItem('formData');
  if (retiveData) {
    const formDataR = JSON.parse(retrivedData);
    fname.value = formDataR.fullName;
    eMail.value = formDataR.email;
    msg.value = formDataR.message;
  }
}

for (let i = 0; i < form1.elements.length; i += 1) {
  form1.elements[i].addEventListener('input', () => {
    storeData();
  });
}

window.addEventListener('load', () => {
  retiveData();
});