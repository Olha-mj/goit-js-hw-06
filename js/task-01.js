const list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

list.forEach(item => {

    const categoryName = item.firstElementChild.textContent;
    const categoryElements = item.lastElementChild.children.length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
});