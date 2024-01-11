const NAME_PATTERN = "^[a-z ,.'-]+$";
const EMAIL_PATTERN = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
const PHONE_PATTERN = "(\+[0-9]{10}[0-9]?)|([0-9]{9})";
const PASSWORD_PATTERN = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";

const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmedPassword = document.querySelector('#confirmed-password');