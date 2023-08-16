const inputField = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");



inputField.addEventListener("input", () => {

    const inputValue = inputField.value;

    if(inputField === "") {
        spanName.textContent = "Anonymous";
    }

    else {
        spanName.textContent = inputValue;
    };
})