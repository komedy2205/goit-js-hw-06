
const listEL = document.querySelector('#categories');
// console.log(listEL);

const listELChild = listEL.children;
console.log(`Number of categories: `, listELChild.length);

const firstChildEl = listEL.querySelectorAll('h2');
const itemsRef = document.querySelectorAll('.item');

itemsRef.forEach(element => {
  const title = element.querySelector('h2').innerHTML;
  const itemsLength = element.querySelectorAll('li').length;
    console.log(`Category: ${title}
Elements: ${itemsLength}`);
});