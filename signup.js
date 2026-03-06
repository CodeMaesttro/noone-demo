// Toggle password visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});

// Form submission
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Send signup data to backend
    fetch('auth/signup.php', {
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
            alert('Account created successfully!');
            console.log('Signup data saved');
            // Optionally redirect to login page
            // window.location.href = 'index.html';
        } else {
            alert('Signup failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during signup');
    });
});

// Social login buttons
document.querySelectorAll('.icon-btn').forEach(button => {
    button.addEventListener('click', function() {
        const title = this.getAttribute('title');
        console.log(`${title} signup clicked`);
        alert(`${title} signup would be implemented here!`);
    });
});

// WhatsApp signup
document.querySelector('.btn-whatsapp').addEventListener('click', function() {
    console.log('WhatsApp/Phone signup clicked');
    alert('WhatsApp/Phone signup would be implemented here!');
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
