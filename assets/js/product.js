// Referencias a elementos
const productNames = document.querySelectorAll('#product-names li');
const productDetails = document.getElementById('product-details');
const productName = document.getElementById('product-name');
const productImage = document.getElementById('product-image');
const productPrice = document.getElementById('product-price');
const closeDetails = document.getElementById('close-details');

// Mostrar detalles del producto
productNames.forEach((product) => {
    product.addEventListener('click', () => {
        const name = product.getAttribute('data-name');
        const price = product.getAttribute('data-price');
        const image = product.getAttribute('data-image');

        productName.textContent = name;
        productPrice.textContent = price;
        productImage.src = image;

        productDetails.classList.remove('hidden');
    });
});

// Cerrar detalles del producto
closeDetails.addEventListener('click', () => {
    productDetails.classList.add('hidden');
});
