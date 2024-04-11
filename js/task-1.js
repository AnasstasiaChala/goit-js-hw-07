const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");

const categoriesCount = categoriesItems.length;
console.log("Amount of categories in ul#categories:", categoriesCount);

categoriesItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryItemsCount = item.querySelectorAll("ul > li").length;
  console.log(`${categoryName} - ${categoryItemsCount} of elements`);
});
