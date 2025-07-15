function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (username && password && role) {
        const registeredUsers = getFromLocalStorage("registeredUsers") || [];
        const existingUser = registeredUsers.find(user => user.username === username);
        if (existingUser) {
            alert("Username already exists. Please choose a different username.");
            return;
        }
        const newUser = {
            username: username,
            password: password,
            role: role,
            registrationTime: new Date().toISOString()
        };
        registeredUsers.push(newUser);
        saveToLocalStorage("registeredUsers", registeredUsers);
        if (role === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "index.html";
        }
        alert(`User registered successfully!\nName: ${username}\nRole: ${role}`);
    } else {
        alert("Please fill in all fields.");
    }
}


function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}
