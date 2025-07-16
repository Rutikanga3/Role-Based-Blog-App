        function login() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            console.log("Hello, " + username + "!");
            console.log("Your password is: " + password);
            if (username && password) {
                const registeredUsers = getFromLocalStorage("registeredUsers") || [];
                const user = registeredUsers.find(user => user.username === username && user.password === password);
                if (user) {
                    const loginData = {
                        username: user.username,
                        role: user.role,
                        loginTime: new Date().toISOString()
                    }
                    loggedInUser("currentUser", loginData);
                    console.log("Login successful for user:", user.username);
                    alert("Login successful!");
                if (user.role === "admin") {
                    window.location.href = "admin.html";
                } else {
                    window.location.href = "blog.html";
                }
                }
                
                else {
                    alert("Invalid username or password.");
                }
            } else {
                alert("Please fill in all fields.");
            }
        }

        function loggedInUser(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        function getFromLocalStorage(key) {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        }
        function removeFromLocalStorage(key) {
            localStorage.removeItem(key);
        }