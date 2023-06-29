const form = document.getElementById('frm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(validateEmail());
});

function validateEmail() {
    const email = form.elements['email'];
    return isLowerCaseStr(email);
}

function isLowerCaseStr(str) {
    let emailRegex = '[a-z1-9]+@+[a-z]+\.[a-z]+';
    for (let i = 0; i < str.length; i++) {
        console.log('str.charAt(i)');
    }
    return str === String(str).toLowerCase();
}