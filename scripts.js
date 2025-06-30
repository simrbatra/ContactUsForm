document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const firstName = document.getElementById("firstname").value.trim();
        const lastName = document.getElementById("lastname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const dob = document.getElementById("date").value;
        const message = document.getElementById("message").value.trim();
        const newsletter = document.getElementById("checkbox").checked;

        if (!firstName || !lastName || !email || !password || !gender || !dob || !message || !newsletter) {
            alert("Please fill in all fields and agree to subscribe.");
            return;
        }

        alert(`Thank you, ${firstName} ${lastName}!\nYour email: ${email} has been submitted.`);
        form.submit(); // Remove this if you're handling submission manually (e.g., to a server)
    });

    form.addEventListener("reset", function () {
        alert("Form has been reset.");
    });
});
