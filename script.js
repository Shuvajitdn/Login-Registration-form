// User Data Store (simulated)
let users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registrationForm').style.display = 'none';
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if the user exists in the stored data
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
        alert('Login Successful');
    } else {
        alert('Invalid username or password');
    }
});

// Handle registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    // Validate registration form fields
    if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
            // Store user in local storage
            const newUser = { username, email, password };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            alert('Registration Successful');
            // Reset to login form after registration
            document.getElementById('form-container').style.display = 'none';
            document.getElementById('intro').style.display = 'block';
            document.getElementById('registrationForm').reset();
        } else {
            alert('Passwords do not match');
        }
    } else {
        alert('Please fill in all fields');
    }
});
