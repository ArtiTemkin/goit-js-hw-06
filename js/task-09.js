

const bgColor = document.querySelector('span.color');
const btnChangeColor = document.querySelector('button.change-color');

btnChangeColor.addEventListener('click', ()=>{
 const randomColor =  getRandomHexColor()
 document.body.style.backgroundColor = randomColor;
  console.log(randomColor)
  bgColor.innerHTML = `${randomColor}`
 });
function getRandomHexColor() {
  return  `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`
      .toLowerCase()
 
 }


 