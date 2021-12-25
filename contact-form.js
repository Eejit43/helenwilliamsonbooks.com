window.onload = function () {
  document.getElementById('name').addEventListener("input", checkNameField);
  document.getElementById('name').addEventListener("blur", checkNameField);
  document.getElementById('email').addEventListener("input", checkEmailField);
  document.getElementById('email').addEventListener("blur", checkEmailField);
  document.getElementById('message').addEventListener("input", checkMessageField);
  document.getElementById('message').addEventListener("blur", checkMessageField);
  document.getElementById('send').addEventListener("click", submitForm);
}

function setRedBorder(id) {
  let element = document.getElementById(id);
  element.style.border = "1px solid #ff5555";
}

function resetBorder(id) {
  let element = document.getElementById(id);
  element.style.border = "";
}

let nameValid, emailValid, messageValid = 0; // 0 = unset, 1 = not valid, 2 = valid
let validEmail;

function checkNameField() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const errorMsg = document.getElementById('error-msg');
  if (name.length === 0) {
    setRedBorder('name');
    errorMsg.innerHTML = 'Please fill out missing fields!<br>';
    nameValid = 1;
  } else if (name.length > 0 && email.length > 0 && message.length > 0 && validEmail === true) {
    errorMsg.innerHTML = '';
    resetBorder('name');
    nameValid = 2;
  } else if (name.length > 0 && email.length > 0 && validEmail === false) {
    resetBorder('name');
    errorMsg.innerHTML = 'Invalid email address!<br>';
    messageValid = 2;
  } else if (name.length > 0) {
    resetBorder('name');
    messageValid = 2;
  }
}

function checkEmailField() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const errorMsg = document.getElementById('error-msg');
  validEmail = (/^(?:[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/).test(email);
  if (validEmail != true) {
    setRedBorder('email');
    errorMsg.innerHTML = 'Invalid email address!<br>';
    emailValid = 1;
  } else if (nameValid === 1 || messageValid === 1) {
    errorMsg.innerHTML = 'Please fill out missing fields!<br>';
    resetBorder('email');
    emailValid = 2;
  } else if (validEmail === true && nameValid === 2 && messageValid === 2) {
    errorMsg.innerHTML = '';
    resetBorder('email');
    emailValid = 2;
  }
  if (email.length === 0) {
    setRedBorder('email');
    errorMsg.innerHTML = 'Please fill out missing fields!<br>';
    emailValid = 1;
  } else if (name.length > 0 && email.length > 0 && message.length > 0 && validEmail === true && document.getElementById('name').style.border != "1px solid #ff5555" && document.getElementById('message').style.border != "1px solid #ff5555") {
    errorMsg.innerHTML = '';
    resetBorder('email');
    emailValid = 2;
  } else if (email.length > 0 && validEmail === true && document.getElementById('name').style.border != "1px solid #ff5555" && document.getElementById('message').style.border != "1px solid #ff5555") {
    resetBorder('email');
    emailValid = 2;
  }
}

function checkMessageField() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const errorMsg = document.getElementById('error-msg');
  if (message.length === 0) {
    setRedBorder('message');
    errorMsg.innerHTML = 'Please fill out missing fields!<br>';
    messageValid = 1;
  } else if (name.length > 0 && email.length > 0 && message.length > 0 && validEmail === true) {
    errorMsg.innerHTML = '';
    resetBorder('message');
    messageValid = 2;
  } else if (name.length > 0 && email.length > 0 && validEmail === false) {
    resetBorder('message');
    errorMsg.innerHTML = 'Invalid email address!<br>';
    messageValid = 2;
  } else if (message.length > 0) {
    resetBorder('message');
    messageValid = 2;
  }
}

let captchaState = 0; // 0 = not completed, 1 = completed

function recaptchaCompleted() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  captchaState = 1;

  if (name.length === 0 || email.length === 0 || message.length === 0) {
    errorMsg.innerHTML = 'Please fill out missing fields!<br>';
  } else if (validEmail === false) {
    errorMsg.innerHTML = 'Invalid email address!<br>';
  } else if (name.length > 0 && email.length > 0 && message.length > 0 && validEmail === true) {
    errorMsg.innerHTML = '';
  }
}

function recaptchaError() {
  const errorMsg = document.getElementById('error-msg');
  captchaState = 0;
  errorMsg.innerHTML = 'An error occurred or the captcha expired, please re-complete!';
}

function submitForm() {
  const errorMsg = document.getElementById('error-msg');

  checkNameField();
  checkEmailField();
  checkMessageField();

  if (nameValid === 2 && emailValid === 2 && messageValid === 2 && validEmail === true && captchaState === 1) {
    document.getElementById("contact-form").submit();
  } else if (captchaState === 0) {
    errorMsg.innerHTML = 'Please complete the captcha!';
  }
}