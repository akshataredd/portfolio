// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop form from submitting
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMsg = document.querySelector('.error-message');

    if (name === "" || email === "" || message === "") {
        errorMsg.textContent = "All fields are required.";
        errorMsg.style.display = "block";
    } else if (!validateEmail(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
        this.submit(); // Submit if all validations pass
    }
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Typing Effect for "An Enthusiastic Full Stack Developer"
const typingElement = document.querySelector('.typing');
const text = "An Enthusiastic Full Stack Developer";
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenCycles = 1000; // 1 second pause

function typeText() {
    if (!isDeleting && charIndex <= text.length) {
        typingElement.textContent = text.slice(0, charIndex++);
        setTimeout(typeText, typingSpeed);
    } 
    else if (isDeleting && charIndex > 0) {
        typingElement.textContent = text.slice(0, charIndex--);
        setTimeout(typeText, deletingSpeed);
    } 
    else {
        isDeleting = !isDeleting;
        setTimeout(typeText, delayBetweenCycles);
    }
}

typeText();
