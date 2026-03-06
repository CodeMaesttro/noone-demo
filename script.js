// Toggle password visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});

// Form submission
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Send login data to backend
    fetch('auth/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful!');
            console.log('Login data saved');
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login');
    });
});

// Social login buttons
document.querySelectorAll('.icon-btn').forEach(button => {
    button.addEventListener('click', function() {
        const title = this.getAttribute('title');
        console.log(`${title} login clicked`);
        alert(`${title} login would be implemented here!`);
    });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.style.background = '#1a1a1a';
    } else {
        body.style.background = '#f5f5f5';
    }
});

// Language selector
const languageSelect = document.getElementById('language');

languageSelect.addEventListener('change', function() {
    console.log('Language changed to:', this.value);
});
