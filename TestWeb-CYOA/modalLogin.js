/**
 * 
 */

// Modal window
var modal = document.getElementById('modalLogin');

// Button that opens the modal
var button = document.getElementById("loginButton");

// When the user clicks the button, open the modal 
button.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}