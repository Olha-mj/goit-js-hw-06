const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
 event.preventDefault(); //Prevent page reload

const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

if (emailInput.value === "" || passwordInput.value === "") {

    alert("Please fill in all the fields!");
} else {
    const loginData = {
        email: emailInput.value,
        password: passwordInput.value,
    };
    console.log(loginData);
}

loginForm.reset();
});

