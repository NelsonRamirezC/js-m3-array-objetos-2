const clientes = [
    {id: 1, nombre: "Pepito", run: "1-1", saldo: 35_000},
    {id: 2, nombre: "Miguel", run: "2-2", saldo: 500_000},
    {id: 3, nombre: "Juanito", run: "3-3", saldo: 1_000},
    {id: 4, nombre: "Antonio", run: "4-4", saldo: 650_000}
];

let cumple = clientes.some(cliente => cliente.nombre.toLowerCase() == "Mario");

if(cumple){
    let registro = clientes.find(cliente => cliente.nombre.toLowerCase() == "miguel");
    console.log(registro);
}else {
    console.log("next...")
}