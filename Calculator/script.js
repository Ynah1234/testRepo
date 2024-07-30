// Function to calculate age based on birthday
function calculateAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Event listener to update age based on birthday input
document.addEventListener('DOMContentLoaded', () => {
    const birthdayInput = document.getElementById('birthday');
    const ageInput = document.getElementById('age');

    if (birthdayInput && ageInput) {
        birthdayInput.addEventListener('change', function () {
            const birthday = birthdayInput.value;
            if (birthday) {
                const age = calculateAge(birthday);
                ageInput.value = age;
            }
        });
    }
});

// Function to display user information
function viewInformation() {
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const suffix = document.getElementById('suffix').value;
    const country = document.getElementById('country').value;
    const province = document.getElementById('province').value;
    const municipality = document.getElementById('municipality').value;
    const barangay = document.getElementById('barangay').value;
    const address = document.getElementById('address').value;
    const birthday = document.getElementById('birthday').value;
    const age = document.getElementById('age').value;

    if (firstName && lastName && country && province && municipality && barangay && address && birthday && age) {
        const userInfo = document.getElementById('userInfo');
        userInfo.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Middle Name:</strong> ${middleName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Suffix:</strong> ${suffix}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Province:</strong> ${province}</p>
            <p><strong>Municipality:</strong> ${municipality}</p>
            <p><strong>Barangay:</strong> ${barangay}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Birthday:</strong> ${birthday}</p>
            <p><strong>Age:</strong> ${age}</p>
        `;
        userInfo.style.display = 'block';
        document.getElementById('submitBtn').style.display = 'block';
    } else {
        alert('Please fill in all required fields.');
    }
}

// Function to handle form submission
function submitRegistration() {
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const suffix = document.getElementById('suffix').value;
    const country = document.getElementById('country').value;
    const province = document.getElementById('province').value;
    const municipality = document.getElementById('municipality').value;
    const barangay = document.getElementById('barangay').value;
    const address = document.getElementById('address').value;
    const birthday = document.getElementById('birthday').value;
    const age = document.getElementById('age').value;

    // Save user data to local storage (simulating a registration process)
    const user = {
        firstName,
        middleName,
        lastName,
        suffix,
        country,
        province,
        municipality,
        barangay,
        address,
        birthday,
        age
    };
    localStorage.setItem('registeredUser', JSON.stringify(user));

    // Redirect to the navigation page
    window.location.href = 'navigation.html';
}

// Calculation Functions for Different Operations
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Unknown operation.");
            return;
    }

    document.getElementById('result').value = result;
}

// Function to load the correct calculation function based on the page
function setupCalculator(operation) {
    document.getElementById('calculateButton').addEventListener('click', function() {
        calculate(operation);
    });
}
