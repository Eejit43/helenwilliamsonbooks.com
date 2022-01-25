// Modified from https://jsfiddle.net/snowMonkey/f1zav0ge/

let modal = document.getElementById('modal');
let images = document.getElementsByClassName('popupimage');
let modalImg = document.getElementById("enlarged-image");
let captionText = document.getElementById("caption");

for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.onclick = function (evt) { // jshint ignore:line
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
};

modal.onclick = function () {
    modal.style.display = "none";
};