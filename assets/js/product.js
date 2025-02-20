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
        productDetails.style.opacity = 0;
        setTimeout(() => {
            productDetails.style.opacity = 1;
        }, 10); // Suaviza la aparición del contenedor de detalles
    });
});

// Cerrar detalles del producto
closeDetails.addEventListener('click', () => {
    productDetails.style.opacity = 0;
    setTimeout(() => {
        productDetails.classList.add('hidden');
    }, 500); // Suaviza la desaparición del contenedor de detalles
});

    productDetails.classList.add('hidden');
});
