// Switch between login and register forms
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginLink = document.querySelector('a[href="#login"]');
    const registerLink = document.querySelector('a[href="#register"]');

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
    });

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    });
});
