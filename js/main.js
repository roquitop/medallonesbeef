
// Variables globales
    let totalPrice = 0;

    // Función para agregar un producto al carrito
    function agregarAlCarrito(nombreProducto, precio) {
      const cartItems = document.getElementById('cart-items');
      const li = document.createElement('li');
      li.textContent = nombreProducto;
      cartItems.appendChild(li);
      
      totalPrice += precio;
      actualizarPrecioTotal();
    }

    // Función para vaciar el carrito
    function vaciarCarrito() {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
      
      totalPrice = 0;
      actualizarPrecioTotal();
    }

    // Función para actualizar el precio total
    function actualizarPrecioTotal() {
      const totalPriceElement = document.getElementById('total-price');
      totalPriceElement.textContent = 'Total a pagar: $' + totalPrice;
    }