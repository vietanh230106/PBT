function renderProducts(products){

    container.innerHTML="";

    products.forEach(product=>{

        const card=
        document.createElement("div");

        card.className="card";

        card.innerHTML=
        `
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <p>${product.rating}</p>
        `;

        container.appendChild(card);

    });

}