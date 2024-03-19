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

let entries = Object.entries(juanito);

for (const iterator of entries) {
    console.log(`${iterator[0]} <- ${iterator[1]}`);
}
