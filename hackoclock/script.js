// Welcome message when page loads
window.addEventListener("load", function () {
    alert("Welcome to Hack o'clock Platform 🚀");
});


// Confirm before going to Register page (Home page buttons)
document.addEventListener("DOMContentLoaded", function () {

    // Select all buttons inside cards (Home page)
    const registerButtons = document.querySelectorAll(".card button");

    registerButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {

            event.preventDefault(); // Stop direct navigation

            const confirmRegister = confirm("Do you want to register for this hackathon?");

            if (confirmRegister) {
                window.location.href = "register.html";
            } else {
                alert("Registration cancelled.");
            }

        });
    });


    // Handle Register page form submission
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {

            event.preventDefault(); // Stop page refresh

            alert("🎉 Registration Successful! Welcome to Hack o'clock!");

            form.reset(); // Clear form after submission

        });
    }

});