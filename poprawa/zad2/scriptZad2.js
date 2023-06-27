const form = document.getElementById('form');
const login = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const loginValue = login.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(loginValue === '') {
        setError(login, 'Wpisz login');
    } else if (loginValue.length < 5) {
        setError(login, 'Login musi mieć co najmniej 5 znaczników ');
    }
    else {
        setSuccess(login);
        return true;
    }

    if(emailValue === '') {
        setError(email, 'Wpisz email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Wpisz poprawny address email');
    } else {
        setSuccess(email);
        return true;
    }

    if(passwordValue === '') {
        setError(password, 'Wpisz hasło');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Hasło musi mie conajmniej 8 zanczników')
    } else {
        setSuccess(password);
        return true;
    }

    if(password2Value === '') {
        setError(password2, 'Sprawdź swoje hasło');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Hasła nie są jednakowe");
    } else {
        setSuccess(password2);
        return true;
    }

};