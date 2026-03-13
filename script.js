document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // نوقف الإرسال الافتراضي

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const country = document.getElementById("country").value.trim();
        const comments = document.getElementById("comments").value.trim();

        if (!fullName || !email || !country || !comments) {
            alert("Please fill in all fields before submitting the form.");
            return;
        }

        alert("Your form has been submitted successfully. Thank you!");
        form.reset();
    });
});
