const juanito = {
    nombre: "Juan",
    apellido: "Riquelme",
    direccionParticular: {
        calle: "Avenida uno",
        numeracion: 5656,
        comuna: "Recoleta",
        region: "Metropolitana",
        codPostal: 9700000
    },
    direccionEmpresa: {
        calle: "Avenida dos",
        numeracion: 9000,
        comuna: "Independencia",
        region: "Metropolitana",
        codPostal: 9600000
    }
};

//console.log(juanito.direccionParticular.calle);
//console.log(juanito.direccionEmpresa.calle);

console.log("Listado de propiedades y valores del objeto:");

for (const key in juanito) {
    console.log(`${key}: ${juanito[key]}`);
}