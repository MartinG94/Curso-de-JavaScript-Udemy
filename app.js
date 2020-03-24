try{
    funcionInexistente();
} catch(error){
    console.log(error);
} finally {
    console.log(`Ejecuta un codigo de todos modos`);
};

function obtenerClientes(){
    console.log(`Descargando...`);
    setTimeout(function() {
        console.log(`Completado`);
    }, 3000);
};

obtenerClientes();