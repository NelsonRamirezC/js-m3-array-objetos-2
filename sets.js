let rutEmpleados = ["1-1", "2-2", "3-3", "2-2"];


const setDatos = new Set(rutEmpleados);
setDatos.add("5-5");
setDatos.delete("3-3");

console.log(setDatos);

console.log("Listado de ruts incluidos para el pago de bono:");

setDatos.forEach(function(rut){
    console.log(rut);
});