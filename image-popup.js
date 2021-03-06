// Modified from https://jsfiddle.net/snowMonkey/f1zav0ge/

let modal = document.getElementById('modal');
let images = document.getElementsByClassName('popupimage');
let modalImg = document.getElementById('enlarged-image');
let captionText = document.getElementById('caption');

function addBookListeners() {
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    }

    let span = document.getElementsByClassName('close')[0];

    span.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}

addBookListeners();
