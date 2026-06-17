// script.js - password-generator app
const passwordInput = document.getElementById('password-input');
const copyBtn = document.getElementById('copyBtn');
const generateBtn = document.getElementById('generateBtn');

const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');

const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');


const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword() {
    let characters = "";

    if(uppercaseCheckbox.checked) {
        characters += uppercaseChars;
    }
    if(lowercaseCheckbox.checked) {
        characters += lowercaseChars;
    }
    if(numbersCheckbox.checked) {
        characters += numberChars;
    }
    if(symbolsCheckbox.checked) {
        characters += symbolChars;
    }

    if(characters === '') {
        passwordInput.value = '';
        alert('Please select at least one character type.');
        return;
    }

    let password = "";
    const passwordLength = Number(lengthSlider.value);

    for (let index = 0; index < passwordLength; index++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    passwordInput.value = password;
}
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
    generatePassword();
});

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
    if(passwordInput.value === '') {
        alert("Generate a password first");
        return;
    }

    navigator.clipboard.writeText(passwordInput.value);
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = originalText;
    }, 1500);

});

uppercaseCheckbox.addEventListener('change', generatePassword);
lowercaseCheckbox.addEventListener('change', generatePassword);
numbersCheckbox.addEventListener('change', generatePassword);
symbolsCheckbox.addEventListener('change', generatePassword);

lengthValue.textContent = lengthSlider.value;
generatePassword();