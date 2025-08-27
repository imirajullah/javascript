
function login(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Username and password cannot be empty.");
        return;
    }

    if (
        password.length < 8 ||
        !/[A-Za-z]/.test(password)||     
        !/[0-9]/.test(password) ||        
        !/[!@#$%^&*(),.?":{}|<>]/.test(password) 
    ) {
        alert("Password must be at least 8 characters long and include a letter, a number, and a symbol.");
        return;
    }
    alert("Login successful!");
}
