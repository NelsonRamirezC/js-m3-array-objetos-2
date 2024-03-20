let notas = [4, 6, 5, 7, 7, 6];


let sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);

// console.log((sumaNotas/notas.length).toFixed(2));

let empleados = [
    {id: 1, nombre: "José", sueldo: 580_000},
    {id: 2, nombre: "Marta", sueldo: 750_000},
    {id: 3, nombre: "Macarena", sueldo: 480_000},
    {id: 4, nombre: "Paul", sueldo: 900_000},
];

// let totalSueldos = empleados.reduce((acumulador, empleado) => acumulador + empleado.sueldo, 0);

let totalSueldos = 0;
for (const empleado of empleados) {
    totalSueldos+= empleado.sueldo;
}
console.log(totalSueldos);
