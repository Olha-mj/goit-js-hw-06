const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);

[...list.children].forEach(item => {

    const categoryName = item.firstElementChild.textContent;
    const categoryElements = item.children[1].children.length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
});