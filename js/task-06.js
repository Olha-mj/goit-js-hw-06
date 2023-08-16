const input = document.querySelector("#validation-input");

console.log(input);

input.addEventListener("blur", () => {
    const inputLength = input.value.length;
    const inputExpectedLength = Number(input.getAttribute("data-length"));

    if (inputLength === inputExpectedLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
    else{
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
});