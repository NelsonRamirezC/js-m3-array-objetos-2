const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: 12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];

let ordenado = items.sort((previous, current) => previous.value - current.value);

//console.log(ordenado);


const nombres = ["Carlos", "Kiko", "pedro", "ñok"];
let resultados = nombres.sort((a, b) => a.localeCompare(b));
//console.log(resultados);