
const btnPluOne = document.querySelector('[data-action="increment"]');
const btnMinusOne = document.querySelector('[data-action="decrement"]');

const counterValue = document.querySelector('#value');
counterValue.value = 0;

const handleClickPlus = () => {
    counterValue.value += 1;
    counterValue.textContent = counterValue.value;
}

const handleClickMinus = () => {
    counterValue.value -= 1;
    counterValue.textContent = counterValue.value;
}

btnPluOne.addEventListener('click', handleClickPlus);
btnMinusOne.addEventListener('click', handleClickMinus);