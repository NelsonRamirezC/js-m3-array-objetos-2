// const alumnos = ["Carlos", "pedro", "MARTA"];

// const arrayProcesado = alumnos.map(alumno => alumno.toLowerCase());

// console.log(arrayProcesado);
// console.log(alumnos);

let auto1 = {id: 1, marca: "Nissan", anio: 2004};
let auto2 = {id: 2, marca: "Chevrolet", anio: 2010};

let autos = [auto1, auto2];

const autosMejorado = autos.map(auto => {
    let anioActual = 2024;
    auto.antiguedad = anioActual - auto.anio;
    return auto;
});

console.log(autosMejorado);


