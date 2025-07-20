document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const buyButtons = document.querySelectorAll('.buy-btn');
    let count = 0;

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            count++;
            cartCount.textContent = count;
            alert('Item added to cart!');
        });
    });
});
