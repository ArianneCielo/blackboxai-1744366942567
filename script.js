// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const developerBtn = document.getElementById('developerBtn');
const developerInfo = document.getElementById('developerInfo');

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.classList.toggle('dark-mode'));
    });
}

if (developerBtn) {
    developerBtn.addEventListener('mouseover', () => {
        developerInfo.classList.remove('hidden');
    });

    developerBtn.addEventListener('mouseout', () => {
        developerInfo.classList.add('hidden');
    });
}

// Login Redirect
const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        if (username) {
            window.location.href = 'home.html';
        } else {
            alert('Please enter a username.');
        }
    });
}
