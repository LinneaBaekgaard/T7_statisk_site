console.log("script hentet");

const category = "Apparel";
const listContainer = document.querySelector(".productList");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=10`)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) =>
        `
    <section class="product_list_container">
        <article class="product_card">
            <div class="card1">
                    <a href="product.html">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="trøje"/>
                    </a>
                <div class="product_info">
                    <h3 class="product-title">${product.productdisplayname}</h3>
                        <p class="product-category">Shorts | Nike</p>
                        <p class="product-price">DKK ${product.price} ,-</p>
                        <a href="product.html" class="read_more">Read More</a>
                </div>   
            </div>
        </article>`
    )
    .join("");

  if (listContainer) {
    listContainer.innerHTML = markup;
  }
}
