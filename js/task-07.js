const inputFontSizeEl = document.querySelector('input#font-size-control');
const fontSizeRef = document.querySelector('span#text');

inputFontSizeEl.addEventListener('input', changeFontSize)   

function changeFontSize(event) {
    fontSizeRef.style.fontSize = inputFontSizeEl.value + "px"
}