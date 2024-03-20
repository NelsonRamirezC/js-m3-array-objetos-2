let alumnos = [
    {id: 1, nombre: "Carlos", promedio: 6.5},
    {id: 2, nombre: "Marta", promedio: 6.8},
    {id: 3, nombre: "Pepito", promedio: 3.8},
    {id: 4, nombre: "Silvia", promedio: 4.5}
];

let reprobados = alumnos.filter(alumno => alumno.promedio < 4);

console.log("reprobados", reprobados);

let destacados = alumnos.filter(alumno => alumno.promedio >= 6);
console.log("Alumnos destacados", destacados)

// let alumnosReprobados = [];
// for (const alumno of alumnos) {
//     if(alumno.promedio < 4){
//         alumnosReprobados.push(alumno);
//     }
// };

// console.log("Cantidad reprobados: ", alumnosReprobados.length);
// console.table(alumnosReprobados);