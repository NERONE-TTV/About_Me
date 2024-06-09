
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return false;
    }
    return true;
}

