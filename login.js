function login() {
    const name = document.getElementById("username").value.trim();
    const error = document.getElementById("error");

    if (name === "") {
        error.textContent = "⚠️ Please enter your name to continue";
        return;
    }

    // Save user session
    localStorage.setItem("campusUser", name);

    // Replace prevents returning to login using back/forward
    window.location.replace("bot.html");
}