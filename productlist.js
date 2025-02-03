let product_container = document.querySelector(".productlist_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `<h1>Fashion<span class="r">R</span>Us</h1>
        <h2>Nike products</h2>
        <section class="product_list_container">
         <article class="product_card">
            <div class="card1">
              <a href="product.html">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${productdisplayname}"/>
              </a>
              <div class="product_info">
                <h3 class="product-title">${data.productdisplayname}</h3>
                <p class="product-category">Shorts | Nike</p>
                <p class="product-price">DKK ${data.price}</p>
                <a href="product.html" class="read_more">Read More</a>
              </div>
            </div>
          </article>`
    )
    .join("");

  console.log(markup);
  product_list_container.innerHTML = markup;
}
