document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_trl402h", "template_ngpa99p", params, "lksXyGtFZZCysmcvV")
        .then(function(response) {
            alert("Message Sent Successfully!");
        }, function(error) {
            alert("Failed to send message. Try again later.");
        });
});

const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Maintain dark mode state across page reloads
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});
