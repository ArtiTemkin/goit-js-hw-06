const textInputEl = document.querySelector('input#name-input');
const textOutputEl = document.querySelector('span#name-output')

function enterName(event) {
    if (event.currentTarget.value === "") {
        textOutputEl.textContent = "Anonymous"
    } else {
        textOutputEl.textContent = event.currentTarget.value;
    }
}

textInputEl.addEventListener("input", enterName)