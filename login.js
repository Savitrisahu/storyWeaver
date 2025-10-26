document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login");
    const usernameInput = document.getElementById("Username"); 
    const passwordInput = document.getElementById("password");

    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if(!username || !password){
            alert("Please fill both fields");
            return;
        }

        const storedData = JSON.parse(localStorage.getItem("credentials"));
        if(!storedData){
            alert("No account found. Please signup first.");
            return;
        }

        if(username === storedData.username && password === storedData.password){
            alert("Login successful!");
            localStorage.setItem("isLoggedIn", "true"); 
            window.location.href = "index.html"; 
        } else {
            alert("Incorrect username or password!");
        }

 usernameInput.value = "";
       passwordInput.value = "";
      
    });
});
