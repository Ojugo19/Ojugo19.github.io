// ===== CONTACT FORM HANDLER =====
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page refresh

        const firstName = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (!firstName || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Thank you! Your message has been sent successfully.");
        form.reset();
    });

    // ===== CLOSE NAVBAR ON MOBILE AFTER CLICK =====
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).toggle();
            }
        });
    });

});