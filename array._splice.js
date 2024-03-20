let alumnos = [
    {id: 1, nombre: "Carlos", promedio: 6.5},
    {id: 2, nombre: "Marta", promedio: 6.8},
    {id: 3, nombre: "Pepito", promedio: 3.8},
    {id: 4, nombre: "Silvia", promedio: 4.5}
];

let idAEliminar = 2; // pepito

alumnos.splice(idAEliminar, 1);

console.log(alumnos);
