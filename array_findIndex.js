const clientes = [
    {id: 1, nombre: "Pepito", run: "1-1", saldo: 35_000},
    {id: 2, nombre: "Miguel", run: "2-2", saldo: 500_000},
    {id: 3, nombre: "Juanito", run: "3-3", saldo: 1_000},
    {id: 4, nombre: "Antonio", run: "4-4", saldo: 650_000}
];

let runBuscado = "5-5";
let clientebuscado = clientes.findIndex(function(cliente){
    if(cliente.run == runBuscado){
        return cliente;
    }else {
        false;
    }
});

//si valor retornado es -1 significa que no encontró al cliente
console.log(clientebuscado);


// let runBuscado = "4-4";
// let clientebuscado = clientes.findIndex(cliente => cliente.run == runBuscado);

// console.log(clientebuscado)

