const inputName = document.querySelector('input');

function checkLength(event) {
    inputName.classList.remove('valid');
    inputName.classList.remove('invalid');
    if (event.currentTarget.value.length === Number(inputName.dataset.length)) {
        inputName.classList.add ('valid')
    } else {
        inputName.classList.add ('invalid')
    }
    return inputName
}

inputName.addEventListener('blur', checkLength)

// console.log(inputName.dataset.length)