console.log("index script loaded");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then(showCategori);

function showCategori(data) {
  console.log("mine data er:", data);

  const markup = data
    .map(
      (element) => `
<a href="productlist.html?category=${element.category}" class="box box1">${element.category}</a>
`
    )
    .join("");

  console.log("min markup er", markup);
  document.querySelector("a").innerHTML = markup;
}
