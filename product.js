let product_container = document.querySelector(".product2_container");
fetch("https://kea-alt-del.dk/t7/api/products/1577")
  .then((Response) => Response.json())
  .then((data) => {
    product_container.innerHTML = `
      <h1>Fashion<span class="r">R</span>Us</h1>
      <section class="product_container">
        <div class="sold_out">Sold Out</div>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/1577.webp" alt="Billede af mand med kasket på." />
        <div class="single_product_info">
          <h2>Product Information</h2>
          <h4>Model Name:</h4>
          <p>${data.productdisplayname}</p>
          <h4>Color:</h4>
          <p>${data.basecolour}</p>
          <h4>Inventory Number:</h4>
          <p>${data.id}</p>

          <h2>Nike</h2>
          <p>Nike, creating experiences for today's athlete.</p>
          <div class="rabat_container">
            <p class="rabat">-34%</p>
          </div>
        </div>

        <div class="add_to_basket">
          <h5>${data.productdisplayname}</h5>
          <p class="product-category">Cap | Nike</p>

          <div class="choose_size">
            <button class="size_button">Choose a size ▽</button>
            <ul class="size_dropdown">
              <li>One Size</li>
            </ul>
          </div>
          <div class="add_to_basket_knap">
            <a href="product.html">Add to Basket</a>
          </div>
        </div>
      </section>
    `;
  });
