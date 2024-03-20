let pedro = {
    nombre: "Pedro", 
    apellido: "Osorio"
};

let carlos = pedro;

carlos.nombre = "Carlos";
carlos.apellido = "Godoy";

pedro.nombre ="Marta";

console.log("pedro", pedro);
console.log("carlos", carlos);