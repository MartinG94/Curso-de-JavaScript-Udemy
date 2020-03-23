const productoA = 'Pizza',
      precioA = 250,
      productoB = 'Hamburguesa',
      precioB = 320;

// Forma vieja de crear un Template de HTML
let html = '<ul>' +
            '<li>Orden: ' + productoA + '</li>' +
            '<li>Precio: ' + precioA + '</li>' +
            '<li>Orden: ' + productoB + '</li>' +
            '<li>Precio: ' + precioB + '</li>' +
            '<li>Total: ' + (precioA + precioB) + '</li>' +
            '</ul>';

document.getElementById('app').innerHTML = html;
