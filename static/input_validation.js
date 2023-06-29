const form = document.getElementById('frm');
const error = document.querySelector('.error');
const email = form.elements['email'];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateEmail()) {
        form.submit();
    }
    else {
        error.innerHTML = 'Only lower case characters are allowed in the email field!';
    }
});

function validateEmail() {       
    return isLowerCaseStr(email.value);
}

function isLowerCaseStr(str) {    
    return str === String(str).toLowerCase();
}