
const listItemRef = document.querySelectorAll('li.item');
// console.log(listItemRef)
console.log('Number of  categories:',listItemRef.length)

listItemRef.forEach(item => {

    const listItemtitleEL = item.querySelector('h2')
    console.log('Category:',listItemtitleEL.textContent)

    const listItemEL = item.querySelectorAll('li')
    console.log('Elements:',listItemEL.length)
});