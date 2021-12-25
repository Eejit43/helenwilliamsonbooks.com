window.onload = function () {
  document.getElementById('submitit').addEventListener("click", submitForm);
}

function showAlert(id) {
  let element = document.getElementById(id);
  element.className = "alert show";
  setTimeout(function () {
    element.className = element.className.replace("alert show", "alert");
  }, 2000);
}

function submitForm() {

}