// Tracks whether the user is in "Reset Password" mode or normal "Login" mode
let resetMode = false;

function toggleReset() {
    // Get references to key elements on the page
    const box = document.getElementById("reset");       // The hidden reset email box
    const btn = document.getElementById("mainbtn");     // The main button that changes text
    const email = document.getElementById("email");     // Login email input
    const password = document.getElementById("password"); // Login password input
    const resetEmail = document.getElementById("resetEmail"); // Reset email input (for password recovery)

    // Switch between login and reset modes
    resetMode = !resetMode;

    // Show or hide the reset email box visually
    box.classList.toggle("show");

    // Change button text depending on mode
    btn.value = resetMode ? "Send Email" : "Login";

    // LOGIN MODE: requires email and password
    if (!resetMode) {
        email.required = true;
        password.required = true;
        resetEmail.required = false;
    }
    // RESET MODE: requires only reset email
    else {
        email.required = false;
        password.required = false;
        resetEmail.required = true;
    }
}

// Wait until the page is fully loaded before attaching form behavior
window.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");

    // Handle form submission for both login and reset modes
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevents the page from reloading

        const btn = document.getElementById("mainbtn");

        // Show a simple message depending on which mode is active
        if (btn.value === "Login") {
            alert("Logging you in...");
        } else {
            alert("Reset email sent!");
        }
    });
});