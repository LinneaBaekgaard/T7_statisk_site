const categoriesContainer = document.querySelector(".knap_container");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showCategori(data));

function showCategori(categories) {
  console.log("mine data er: ", categories);

  const markup = categories.map((mycategory) => `<a href="productlist.html?category=${mycategory.category}">${mycategory.category}</a>`).join("");

  console.log("min markup er", markup);
  categoriesContainer.innerHTML = markup;
}
