const inputField = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");



inputField.addEventListener("input", () => {

    const inputValue = inputField.value.trim();

    if(inputValue === "") {
        spanName.textContent = "Anonymous";
    }

    else {
        spanName.textContent = inputValue;
    };
})