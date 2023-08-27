const slider = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");


slider.addEventListener("change", fontSizeChange);

function fontSizeChange() {
  
  const textFontSize = slider.value + "px";
  textSpan.style.fontSize = textFontSize;
};

fontSizeChange();