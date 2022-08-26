let cantidad = prompt(`Vamos a calcular el promedio de edad de tus mascotas. Ingresá cuantas mascotas tenés.`)
let nombres = prompt(`Ingresá sus nombres`)

let eM; //(eM = Edad de las mascotas). Acá se registran las edades.
let sE = 0; //(sE= Sumatoria de edades). Acá se acumulan.
let n; //Esto para que muestre el número correctamente.

for(n=1;n<=cantidad;n++){
    eM = parseInt(prompt(`Ingresá la edad (en años) de tu mascota numero `+n));
    sE = sE + eM;
}

console.log(`El promedio de edad de tus ${cantidad} mascotas es de ${sE/cantidad}`);

alert(`${nombres} llevan haciéndote feliz ${sE/cantidad} años en promedio. Dales sus buenas caricias por éso =)`)

