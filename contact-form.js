/* Add event listeners */
document.getElementById('name').addEventListener("input", checkNameField);
document.getElementById('name').addEventListener("blur", checkNameField);
document.getElementById('email').addEventListener("input", checkEmailField);
document.getElementById('email').addEventListener("blur", checkEmailField);
document.getElementById('message').addEventListener("input", checkMessageField);
document.getElementById('message').addEventListener("blur", checkMessageField);
document.getElementById('send').addEventListener("click", submitForm);

function setRedBorder(id) {
    let element = document.getElementById(id);
    element.style.border = "1px solid #ff5555";
}

function resetBorder(id) {
    let element = document.getElementById(id);
    element.style.border = "";
}

let nameValid, emailValid, messageValid = 0; // 0 = unset, 1 = not valid, 2 = valid
let validEmail; // true/false
let captchaState = 0; // 0 = not completed, 1 = error, 2 = completed

const errorMsg = document.getElementById('error-msg');

function updateErrorMsg() {
    if (nameValid === 1 || emailValid === 1 || messageValid === 1) {
        errorMsg.innerHTML = 'Please fill out the missing field(s)!<br>';
    } else if (validEmail === false) {
        errorMsg.innerHTML = 'Invalid email address!<br>';
    } else if (captchaState === 0) {
        errorMsg.innerHTML = 'Please complete the captcha!<br>';
    } else if (captchaState === 1) {
        errorMsg.innerHTML = 'An error occurred or the captcha expired, please (re)complete!<br>';
    } else {
        errorMsg.innerHTML = '';
    }
}

function checkNameField() {
    const name = document.getElementById('name').value;
    if (name.length === 0) {
        setRedBorder('name');
        nameValid = 1;
        updateErrorMsg();
    } else if (name.length > 0) {
        resetBorder('name');
        nameValid = 2;
        updateErrorMsg();
    }
}

function checkEmailField() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    validEmail = (/^(?:[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/).test(email);
    if (email.length === 0) {
        setRedBorder('email');
        emailValid = 1;
        updateErrorMsg();
    } else if (email.length > 0) {
        resetBorder('email');
        emailValid = 2;
        updateErrorMsg();
    }
    if (validEmail !== true && email.length > 0) {
        setRedBorder('email');
        emailValid = 1;
        errorMsg.innerHTML = 'Invalid email address!<br>';
    }
}

function checkMessageField() {
    const message = document.getElementById('message').value;
    if (message.length === 0) {
        setRedBorder('message');
        messageValid = 1;
        updateErrorMsg();
    } else if (message.length > 0) {
        resetBorder('message');
        messageValid = 2;
        updateErrorMsg();
    }
}

function recaptchaCompleted() {
    captchaState = 2;
    updateErrorMsg();
}

function recaptchaError() {
    captchaState = 1;
    errorMsg.innerHTML = 'An error occurred or the captcha expired, please (re)complete!<br>';
}

function submitForm() {
    checkNameField();
    checkEmailField();
    checkMessageField();

    if (nameValid === 2 && emailValid === 2 && messageValid === 2 && validEmail === true && captchaState === 2) {
        document.getElementById("contact-form").submit();
    } else {
        updateErrorMsg();
    }
}