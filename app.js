try{
    funcionInexistente();
} catch(error){
    console.log(error);
};

function obtenerClientes(){
    console.log(`Descargando...`);
    setTimeout(function() {
        console.log(`Completado`);
    }, 3000);
};

obtenerClientes();

