document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".product-card button");
    const cartSection = document.querySelector("#cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productCard = button.closest(".product-card");
            const productName = productCard.querySelector("h3").innerText;
            const productPrice = productCard.querySelector(".price").innerText;

            const cartItem = document.createElement("p");
            cartItem.innerText = `${productName} - ${productPrice}`;
            cartSection.appendChild(cartItem);
        });
    });
});
