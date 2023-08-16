const slider = document.getElementById("font-size-control");

const textSpan = document.getElementById("text")


slider.addEventListener("input", () => {
     const textFontSize = slider.value + "px";
     textSpan.style.fontSize = textFontSize;
});