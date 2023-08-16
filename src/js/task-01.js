
//Getting the element with id "categories"
const categoryList = document.getElementById("categories");

//Getting a massive with all the items that have "item" class

const categoryListItems = categoryList.querySelectorAll(".item");

//Showing the number of the items in the massive

const categoryNumber = categoryListItems.length;

console.log("Number of categories:", categoryNumber);

// Showing the names of the categories and the number of elements

categoryListItems.forEach(function (categoryItem) {

    //Finding all the h2 items with the names of the categories and showing its text
    const categoryName = categoryItem.querySelector("h2").textContent;

    //Finding all li elements and gettin the number of them
    const elementsOfCategory = categoryItem.querySelectorAll("li");
    const elementsNumber = elementsOfCategory.length;

    //Showing them in the console
    console.log("Category:", categoryName);
    console.log("Elements:", elementsNumber);

})