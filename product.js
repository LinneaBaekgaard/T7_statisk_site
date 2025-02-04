let productContainer = document.querySelector(".productContainer");
fetch("https://kea-alt-del.dk/t7/api/products/1165")
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
        <article class="produkt_side">
        <img class="produkt_billede" src="https://kea-alt-del.dk/t7/images/webp/640/1165.webp" alt="trøje">
        <p class="produkt_tekst"><b>${data.productdisplayname}</b><br>DKK ${data.price},-<br><b>${data.usagetype}<br></p> 

        <div class="kurven_container">       
        <p class="kurven">Læg i kurven</p></div>
    </article>`;
  });
