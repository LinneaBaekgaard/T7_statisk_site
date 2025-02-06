console.log("script hentet");

const category = "Apparel";
const listContainer = document.querySelector(".productList");
const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${selectedCategory}`)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) =>
        `
<section class="produkt">
  <article class="smallProduct ${product.soldout ? "sold-out_container" : ""}">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="trøje">
    <p><b>${product.productdisplayname}</b><br>DKK ${product.price},- </p>
    Nu DKK ${product.price},- ${product.discount ? `<span class="tilbud">${product.discount}%</span>` : ""}
    </p>

    ${product.soldout ? '<span class="sold-out_tekst">Udsolgt</span>' : ""}

    <a class="read_more" href="product.html">Gå til produkt</a>
  </article>
</section>
    `
    )
    .join("");

  if (listContainer) {
    listContainer.innerHTML = markup;
  }
}
