const productoA = 'Pizza',
      precioA = 270,
      productoB = 'Hamburguesa',
      precioB = 350;

// Forma vieja de crear un Template de HTML
// let html = '<ul>' +
//             '<li>Orden: ' + productoA + '</li>' +
//             '<li>Precio: ' + precioA + '</li>' +
//             '<li>Orden: ' + productoB + '</li>' +
//             '<li>Precio: ' + precioB + '</li>' +
//             '<li>Total: ' + (precioA + precioB) + '</li>' +
//             '</ul>';

function calcularTotal(unPrecio, otroPrecio){
    return unPrecio + otroPrecio;
};

html = `
    <ul>
        <li>Orden: ${productoA} </li>
        <li>Precio: ${precioA} </li>
        <li>Orden: ${productoB} </li>
        <li>Precio: ${precioB} </li>
        <li>Total: ${calcularTotal(precioA, precioB)} </li>
    </ul>
        `;

// Las funciones pueden usarse dentro de los Templates Literals

document.getElementById('app').innerHTML = html;
