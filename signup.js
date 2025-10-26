document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementById("signup");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    signupBtn.addEventListener("click", (e)=>{
        e.preventDefault();

        let user = usernameInput.value.trim();
        let gmail = emailInput.value.trim();
        let pass = passwordInput.value.trim();

        if(!user || !gmail || !pass){
            alert("Please fill all fields");
            return;
        }

        localStorage.setItem("credentials", JSON.stringify({
            username: user,
            email: gmail,
            password: pass
        }));
        localStorage.setItem("username", user);
         localStorage.setItem("isLoggedIn", "true");


        alert("Signup successful!");
        window.location.href = "index.html"; 

        setTimeout(() => {
            window.location.href = "index.html";
        }, 300);
    });
});


