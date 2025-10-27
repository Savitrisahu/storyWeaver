
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const username = localStorage.getItem("username") || "User";

    if (isLoggedIn) {
        navbar.innerHTML = `
            <a href="index.html" id="logo">Story Weaver</a>
            <div class="nav1" id = "nav1">
                <a href="index.html">Home</a>
                <a href="library.html">Library</a>
                <a href="myLibrary.html">My Library</a>
                <a href="submit.html">Submit</a>
            </div>
            <div class="nav2" id = "nav2">
                <a href="#" id="userGreeting">Hello, ${username}</a>
                <a href="#" id="logout">Logout</a>
            </div>
        `;
    } else {
        navbar.innerHTML = `
            <a href="index.html" id="logo">Story Weaver</a>
            <div class="nav1">
                <a href="index.html">Home</a>
                <a href="library.html">Library</a>
            </div>
            <div class="nav2">
                <a href="login.html">Login</a>
                <a href="signUp.html">Sign Up</a>
            </div>
        `;
    }

    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("username");
            window.location.href = "index.html";
        });
    }
});


