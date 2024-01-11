const NAME_PATTERN = "^[a-z ,.'-]+$";
const EMAIL_PATTERN = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
const PHONE_PATTERN = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$";
const PASSWORD_PATTERN = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";

const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const password = document.querySelector('#password');
const confirmedPassword = document.querySelector('#confirmed-password');
const form = document.querySelector('form');

const inputs = [];

class dataInput {
    constructor(input, pattern){
        this.input = input;
        this.pattern = pattern;
    }
}

function setArray(){
    inputs.push(new dataInput(firstNameInput, NAME_PATTERN));
    inputs.push(new dataInput(lastNameInput, NAME_PATTERN));
    inputs.push(new dataInput(emailInput, EMAIL_PATTERN));
    inputs.push(new dataInput(phoneInput, PHONE_PATTERN));
    inputs.push(new dataInput(password, PASSWORD_PATTERN));
    inputs.push(new dataInput(confirmedPassword, PASSWORD_PATTERN));
}

function checkWithPattern(inputValue, pattern){
    return new RegExp(pattern).test(inputValue);
}

function validateInputs(){
    let isValid = true;
    for(let i=0; i<inputs.length; i++){
        if(!checkWithPattern(inputs[i].input.value, inputs[i].pattern)){
            isValid = false;
            const errorLabel = document.querySelector(`#${inputs[i].input.id} + label`);
            errorLabel.classList.add("invalid");
        }
    }
    return isValid;
}

setArray();
form.addEventListener('submit', (event) => {
    if(!validateInputs())
        event.preventDefault();
})

for(let i=0; i<inputs.length; i++){
    inputs[i].input.addEventListener('change', () => {
        const errorLabel = document.querySelector(`#${inputs[i].input.id} + label`);
        if(!checkWithPattern(inputs[i].input.value, inputs[i].pattern)){
            isValid = false;
            errorLabel.classList.add("invalid");
        }
        else{
            errorLabel.classList.remove("invalid");
        }
    });
}