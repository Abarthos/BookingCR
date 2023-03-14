// Get the modal element
var modal = document.getElementById("modal");

// Get the button that opens the modal
var showModalBtn = document.getElementById("show-modal-btn");

// When the user clicks the button, open the modal
showModalBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function() {
  // Obtener referencias a los elementos relevantes del DOM
  var $signupLink = $('#signup-link');
  var $signupModal = $('#signup-modal');
  var $signupModalClose = $signupModal.find('.logIn_btn-changes1');

  // Manejar el evento click en el enlace de registro
  $signupLink.on('click', function(event) {
    event.preventDefault();
    $signupModal.fadeIn();
  });

  // Manejar el evento click en el botón de cerrar del formulario
  $signupModalClose.on('click', function(event) {
    event.preventDefault();
    $signupModal.fadeOut();
  });
});