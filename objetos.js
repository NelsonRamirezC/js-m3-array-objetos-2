const vehiculo1 = {
    marca: "Nissan",
    modelo: "March",
    disponible: true,
    anio: 2015,
    nuevo: false,
    suspension: "4x2",
    precio: 4_800_000,
    combustible: "diesel",
    kilometraje: 45_000,
    transmision: "MT",
    motor: {
        tipoMotor: "a combustión",
        cilindrada: "1.6",
        hp: "150"
    },
    antiguedad: function(){
        let anioActual = 2024;
        let antiguedad = anioActual - this.anio;
        return antiguedad;
    },
    sumarKilometraje: function(kilometraje){
        this.kilometraje += kilometraje;
        return "nuevo kilometraje : " + this.kilometraje;
    },
    cambiarDisponibilidad: function(disponibilidad){
        this.disponible = disponibilidad;
        return "Se ha cambiado disponibilidad a: " + this.disponible;
    }
};


console.log(vehiculo1.motor.cilindrada);