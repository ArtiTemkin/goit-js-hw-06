

const bgColor = document.querySelector('span.color');
const btnChangeColor = document.querySelector('button.change-color');

btnChangeColor.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`
      .toLowerCase()
  document.body.style.backgroundColor = randomColor;
  
  console.log(randomColor)
  bgColor.innerHTML = `${randomColor}`
  return randomColor
  
  // console.log( bgColor.textContent)
  //  return randomColor
}
 