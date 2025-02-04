console.log("script hentet");

const category = "Apparel";
const listContainer = document.querySelector(".productList");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) =>
        `
      <section class="produkter">
      <article>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="trøje">
        <p><b>${product.productdisplayname}</b><br>DKK ${product.price},- </p>
        <a class="read_more" href="product.html">Gå til produkt</a>
      </article>

      <article class="smallProduct ${product.discount && "tilbud"}">
         <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="sko">
        <p><b>${product.productdisplayname}</b><br> Nu DKK ${product.price},- <span class="tilbud">${product.discount}%</span><br></p>
        <p><a class="read_more" href="product.html">Gå til produkt</a></p>
        </article>

        <article class="sold-out_container ${product.solout && "soldOut"}">
        <img class="sold-out_billede" src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tights">
        <span class="sold-out_tekst">Udsolgt</span>
        <p><s><b>${product.productdisplayname}</b><br>DK ${product.price} ,- </s></p> 
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
