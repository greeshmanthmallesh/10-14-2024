// Simple form validation using ES6 arrow function
const validateForm = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Name validation: Must be at least 3 characters
    if (name.length < 3) {
        alert('Name must be at least 3 characters long.');
        return false;
    }

    // Email validation: Simple regex check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
};

